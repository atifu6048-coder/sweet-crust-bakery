"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { MessageCircle, Menu, X, User } from "lucide-react";
import { getWhatsAppOrderUrl, BAKERY_NAME } from "@/lib/constants";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "About", href: "/about" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 left-0 right-0 w-full z-50 bg-[#fff8f1]/90 backdrop-blur-md shadow-[0_4px_20px_-4px_rgba(107,66,38,0.08)] transition-all">
      <div className="h-20 max-w-[1200px] mx-auto px-5 lg:px-6 flex items-center justify-between">
        {/* Brand / Logo */}
        <Link
          href="/"
          onClick={closeMenu}
          className="flex items-center gap-2.5 group focus:outline-none"
          aria-label={`${BAKERY_NAME} - Home`}
        >
          <div className="relative h-8 w-8 shrink-0">
            <Image
              src="https://lh3.googleusercontent.com/aida/AEtjO1UOzTfhZ6Ozx5SOA9RsNN47HV_OHo7lZGb8mUeZNgfooxUow93ET1D7t7GV36dO73pWbvwDfF4mPUTnW-ML-3zDDnHXeLNf6WUt_6_M8E5CBWBhsralYyZHwHqUinJybXazbbI3knF0kOeu1egDkO_QpMcQ_E80Bk0fTYOSrtYhDTozH2NN-wIlsTDXIaLkhh0iY56hcaw--GUPIXMGwgOJ6KeIcta6O-GcUmqTu_kAK7AuzWLdqJeWfeE"
              alt="Sweet Crust Bakery Logo"
              fill
              sizes="32px"
              className="object-contain"
            />
          </div>
          <span className="font-bold text-xl text-[#502c12] tracking-tight">
            Sweet Crust Bakery
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Main Navigation">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-colors ${
                  isActive
                    ? "bg-[#502c12] text-white"
                    : "text-[#51443d] hover:text-[#1e1b17] hover:bg-[#f4ede5]"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-3 sm:gap-4">
          <a
            href={getWhatsAppOrderUrl()}
            target="_blank"
            rel="noopener noreferrer"
            id="header-order-whatsapp-btn"
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl bg-[#6b4226] text-white text-sm font-semibold hover:bg-[#502c12] transition-all duration-200 shadow-[0_8px_20px_-4px_rgba(107,66,38,0.2)] focus:outline-none focus:ring-2 focus:ring-[#9b4426]"
          >
            <MessageCircle className="w-4 h-4 text-white" />
            <span className="hidden sm:inline">Order on WhatsApp</span>
            <span className="sm:hidden">WhatsApp</span>
          </a>

          <div className="w-8 h-8 rounded-full bg-[#502c12] hidden md:flex items-center justify-center text-white">
            <User className="w-4 h-4" />
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-[#502c12] hover:bg-[#f4ede5] md:hidden focus:outline-none focus:ring-2 focus:ring-[#9b4426]"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
            id="mobile-menu-toggle-btn"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="md:hidden bg-[#fff8f1] border-b border-[#d5c3b9] px-4 pt-3 pb-6 shadow-lg animate-in slide-in-from-top-2 duration-200"
        >
          <nav className="flex flex-col space-y-1.5" aria-label="Mobile Navigation">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className={`px-4 py-2.5 rounded-xl text-base font-medium transition-colors ${
                    isActive
                      ? "bg-[#502c12] text-white font-semibold"
                      : "text-[#1e1b17] hover:bg-[#f4ede5]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
