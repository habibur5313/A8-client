"use client";
import { MapPin, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import { logoutUser } from "@/services/auth/logoutUser";
import { ModeToggle } from "../ModeToggle";

export function PublicNavbar({accessToken}: {accessToken?: string | null}) {


  const handleLogout = async () => {
    await logoutUser();
  };
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Routes where navbar should be hidden
  const hiddenRoutes = ["/login", "/register", "/forget-password"];

  // If current route matches any hidden route → don't render navbar
  if (hiddenRoutes.includes(pathname)) return null;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-linear-to-br from-blue-700 to-blue-400 rounded-2xl flex items-center justify-center">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-linear-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent">
              TravelGuide
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-2 lg:gap-5 xl:gap-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              href="/tour-experiences?limit=9"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Tours
            </Link>
            <Link
              href="/gguide?limit=9"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Guides
            </Link>
            <Link
              href="/about-contact"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              About & Contact
            </Link>
            
            <Link
              href="/dashboard"
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Dashboard
            </Link>
            <ModeToggle/>

            {accessToken ? (
              <Button
                onClick={handleLogout}
                className="px-6 py-2.5 bg-red-600 hover:bg-red-600 cursor-pointer text-white rounded-full font-semibold"
              >
                Logout
              </Button>
            ) : (
              <Link href="/login">
                <Button className="px-6 py-2.5 bg-linear-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold">
                  Login
                </Button>
              </Link>
            )}
          </div>

          {/* Mobile Toggle Button */}
          <button
            className="md:hidden p-2 text-black"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 border-t border-gray-100 dark:border-gray-700">
          <div className="px-4 py-4 flex flex-col space-y-3">
            <Link
              href="/"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              href="/tour-experiences?limit=8"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 font-medium transition-colors"
            >
              Tours & Experiences
            </Link>
            <Link
              href="/gguide?limit=8"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 font-medium transition-colors"
            >
              Guides
            </Link>
            <Link
              href="/about-contact"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 font-medium transition-colors"
            >
              About & Contact
            </Link>
            <Link
              href="/dashboard"
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 font-medium transition-colors"
            >
              Dashboard
            </Link>
            <div className="flex gap-4">
              <ModeToggle/>

            {accessToken ? (
              <Button
                onClick={handleLogout}
                className="px-6 py-2.5 bg-red-600 hover:bg-red-600 cursor-pointer text-white rounded-full font-semibold"
              >
                Logout
              </Button>
            ) : (
              <Link href="/login">
                <Button className="px-6 py-2.5 bg-linear-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold">
                  Login
                </Button>
              </Link>
            )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
