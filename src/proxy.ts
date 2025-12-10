import jwt, { JwtPayload } from 'jsonwebtoken';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import { getDefaultDashboardRoute, getRouteOwner, isAuthRoute, UserRole } from './lib/auth-utils';
import { getUserInfo } from './services/auth/getUserInfo';
import { deleteCookie, getCookie } from './services/auth/tokenHandlers';
import { getNewAccessToken } from './services/auth/auth.service';
import { userInfo } from 'os';

export async function proxy(request: NextRequest) {
    const pathname = request.nextUrl.pathname;
    const hasTokenRefreshedParam = request.nextUrl.searchParams.has('tokenRefreshed');

    if (hasTokenRefreshedParam) {
        const url = request.nextUrl.clone();
        url.searchParams.delete('tokenRefreshed');
        return NextResponse.redirect(url);
    }

    const tokenRefreshResult = await getNewAccessToken();

    if (tokenRefreshResult?.tokenRefreshed) {
        const url = request.nextUrl.clone();
        url.searchParams.set('tokenRefreshed', 'true');
        return NextResponse.redirect(url);
    }

    const accessToken = await getCookie("accessToken") || null;

    let userRole: UserRole | null = null;
    if (accessToken) {
        const verifiedToken: JwtPayload | string = jwt.verify(
            accessToken,
            process.env.JWT_SECRET as string
        );

        if (typeof verifiedToken === "string") {
            await deleteCookie("accessToken");
            await deleteCookie("refreshToken");
            return NextResponse.redirect(new URL('/login', request.url));
        }

        userRole = verifiedToken.role;
    }

    const routerOwner = getRouteOwner(pathname);
    const isAuth = isAuthRoute(pathname);

    // ---- SUPERADMIN bypass rule ----
    if (userRole === "SUPER_ADMIN") {
        // SUPERADMIN can access anything, no block
        if (isAuth) {
            return NextResponse.redirect(
                new URL(getDefaultDashboardRoute("SUPER_ADMIN"), request.url)
            );
        }
        return NextResponse.next();
    }
    // ---------------------------------

    // Rule 1 : User is logged in and trying to access auth route
    if (accessToken && isAuth) {
        return NextResponse.redirect(
            new URL(getDefaultDashboardRoute(userRole as UserRole), request.url)
        );
    }

    // Rule 2 : Public route (open)
    if (routerOwner === null) {
        return NextResponse.next();
    }

    // Not logged in → block protected route
    if (!accessToken) {
        const loginUrl = new URL("/login", request.url);
        loginUrl.searchParams.set("redirect", pathname);
        return NextResponse.redirect(loginUrl);
    }


    // Rule 3 : Need password change
    if (accessToken) {
        const userInfo = await getUserInfo();
        if (userInfo.needPasswordChange) {
            if (pathname !== "/reset-password") {
                const resetPasswordUrl = new URL("/reset-password", request.url);
                resetPasswordUrl.searchParams.set("redirect", pathname);
                return NextResponse.redirect(resetPasswordUrl);
            }
            return NextResponse.next();
        }

        if (!userInfo.needPasswordChange && pathname === "/reset-password") {
            return NextResponse.redirect(
                new URL(getDefaultDashboardRoute(userRole as UserRole), request.url)
            );
        }
    }

    // Rule 4 : Common protected
    if (routerOwner === "COMMON") {
        return NextResponse.next();
    }

    // Rule 5 : Role based protection
    if (["SUPER_ADMIN", "ADMIN", "GUIDE", "TOURIST"].includes(routerOwner)) {
        if (userRole !== routerOwner) {
            return NextResponse.redirect(
                new URL(getDefaultDashboardRoute(userRole as UserRole), request.url)
            );
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.well-known).*)',
    ],
};
