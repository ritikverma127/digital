"use client";

import Image from "next/image";
import Link from "next/link";
// import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/pages/blogs", label: "Blogs" },
    { href: "/pages/offering", label: "Offering" },
    { href: "/pages/contact", label: "Contact Us" },
  ];

  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              {/* <Image
                src="/hero.webp"
                alt="Digital Logo"
                width={150}
                height={50}
                className="h-12 w-auto"
              /> */}
              <div className="text-newPrimary font-bold text-2xl">Taboola</div>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8 font-bold">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative group transition-opacity duration-200 
                  ${pathname === link.href ? "text-black" : "text-gray-700"} 
                  hover:text-blue-700`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 w-full h-0.5 bg-[#2E3192] transform scale-x-0 transition-transform duration-200
                    ${pathname === link.href ? "scale-x-100" : ""}
                    group-hover:scale-x-100`}
                />
              </Link>
            ))}
          </div>

          {/* Desktop CTA Button */}
          {/* <div className="hidden md:block">
            <Link href="/pages/contact">
              <Button className="bg-[#2E3192] hover:bg-[#24276E] text-white">
                Get Proposal
              </Button>
            </Link>
          </div> */}

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-700 hover:text-blue-700 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed inset-0 bg-white z-50 transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Mobile Header */}
            <div className="flex justify-between items-center h-20 px-4 pt-10 pr-7">
              <Link
                href="/"
                className="flex items-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <Image
                  src="/hero.webp"
                  alt="Digital Logo"
                  width={150}
                  height={50}
                  className="h-12 w-auto"
                />
              </Link>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-md text-gray-700 hover:text-blue-700 focus:outline-none"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Mobile Navigation Items */}
            <nav className="flex flex-col items-center justify-center flex-1">
              <div className="space-y-8">
                {navLinks.map((link) => (
                  <div key={link.href} className="text-center">
                    <Link
                      href={link.href}
                      className={`text-xl py-2 relative inline-block
                        ${
                          pathname === link.href
                            ? "text-black"
                            : "text-gray-700"
                        }
                        hover:text-blue-700 transition-colors duration-200`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                      {pathname === link.href && (
                        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#2E3192]" />
                      )}
                    </Link>
                  </div>
                ))}
                {/* <div className="text-center pt-8">
                  <Link
                    href="/pages/contact"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Button className="w-full bg-[#2E3192] hover:bg-[#24276E] text-white">
                      Get Proposal
                    </Button>
                  </Link>
                </div> */}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </nav>
  );
}
