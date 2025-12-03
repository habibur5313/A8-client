// import { getCookie } from "@/services/auth/tokenHandlers";
// import { Menu } from "lucide-react";
// import Link from "next/link";
// import { Button } from "../ui/button";
// import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
// import LogoutButton from "./LogoutButton";

// const PublicNavbar = async () => {
//   const navItems = [
//     { href: "#", label: "Consultation" },
//     { href: "#", label: "Health Plans" },
//     { href: "#", label: "Medicine" },
//     { href: "#", label: "Diagnostics" },
//     { href: "#", label: "NGOs" },
//   ];

//   const accessToken = await getCookie("accessToken");

//   return (
//     <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur  dark:bg-background/95">
//       <div className="container mx-auto flex h-16 items-center justify-between px-4">
//         <Link href="/" className="flex items-center space-x-2">
//           <span className="text-xl font-bold text-primary">PH Doc</span>
//         </Link>

//         <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
//           {navItems.map((link) => (
//             <Link
//               key={link.label}
//               href={link.href}
//               className="text-foreground hover:text-primary transition-colors"
//             >
//               {link.label}
//             </Link>
//           ))}
//         </nav>

//         <div className="hidden md:flex items-center space-x-2">
//           {accessToken ? (
//             <LogoutButton />
//           ) : (
//             <Link href="/login">
//               <Button>Login</Button>
//             </Link>
//           )}
//         </div>

//         {/* Mobile Menu */}

//         <div className="md:hidden">
//           <Sheet>
//             <SheetTrigger asChild>
//               <Button variant="outline">
//                 {" "}
//                 <Menu />{" "}
//               </Button>
//             </SheetTrigger>
//             <SheetContent side="right" className="w-[300px] sm:w-[400px] p-4">
//               <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
//               <nav className="flex flex-col space-y-4 mt-8">
//                 {navItems.map((link) => (
//                   <Link
//                     key={link.label}
//                     href={link.href}
//                     className="text-lg font-medium"
//                   >
//                     {link.label}
//                   </Link>
//                 ))}
//                 <div className="border-t pt-4 flex flex-col space-y-4">
//                   <div className="flex justify-center"></div>
//                   <Link href="/login" className="text-lg font-medium">
//                     <Button>Login</Button>
//                   </Link>
//                 </div>
//               </nav>
//             </SheetContent>
//           </Sheet>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default PublicNavbar;

"use client";

import { MapPin, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";

export function PublicNavbar() {
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
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
              <MapPin className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              TravelAI
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#cities" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Cities
            </a>
            <a href="#guides" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Guides
            </a>
            <a href="#how" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              How It Works
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              About
            </a>

            <Link href="/login">
              <Button className="w-full px-6 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold">
                Login
              </Button>
            </Link>
          </div>

          {/* Mobile Toggle Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-4 space-y-3">
            <a href="#cities" className="block py-2 text-gray-700 font-medium">
              Cities
            </a>
            <a href="#guides" className="block py-2 text-gray-700 font-medium">
              Guides
            </a>
            <a href="#how" className="block py-2 text-gray-700 font-medium">
              How It Works
            </a>
            <a href="#about" className="block py-2 text-gray-700 font-medium">
              About
            </a>

            <Link href="/login">
              <Button className="w-full px-6 py-2.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold">
                Login
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

