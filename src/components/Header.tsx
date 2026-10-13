"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Cake, Menu, X, MessageCircle } from "lucide-react";
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
    <header className="sticky top-0 z-50 bg-[#FFF8F0]/95 backdrop-blur-sm border-b border-[#FBE3D9] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Brand Name */}
          <Link
            href="/"
            onClick={closeMenu}
            className="flex items-center gap-2.5 group focus:outline-none"
            aria-label={`${BAKERY_NAME} - Home`}
          >
            <div className="w-11 h-11 rounded-full bg-[#FBE3D9] flex items-center justify-center text-[#6B4226] group-hover:scale-105 transition-transform">
              <Cake className="w-6 h-6 text-[#6B4226]" />
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#6B4226] block leading-tight">
                Sweet Crust Bakery
              </span>
              <span className="text-xs font-medium text-[#E07856] block tracking-wide">
                Home Bakery • Mardan
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-base font-medium transition-colors relative py-1 ${
                    isActive
                      ? "text-[#6B4226] font-semibold"
                      : "text-[#2E211A]/80 hover:text-[#6B4226]"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E07856] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Order on WhatsApp Button */}
          <div className="hidden md:flex items-center">
            <a
              href={getWhatsAppOrderUrl()}
              target="_blank"
              rel="noopener noreferrer"
              id="header-order-whatsapp-btn"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#6B4226] text-[#FFF8F0] text-sm font-semibold shadow-sm hover:bg-[#54331C] active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-[#E07856] focus:ring-offset-2"
            >
              <MessageCircle className="w-4 h-4 text-[#FFF8F0]" />
              <span>Order on WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-[#6B4226] hover:bg-[#FBE3D9] focus:outline-none focus:ring-2 focus:ring-[#E07856]"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
              id="mobile-menu-toggle-btn"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="md:hidden bg-[#FFF8F0] border-b border-[#FBE3D9] px-4 pt-3 pb-6 shadow-lg animate-in slide-in-from-top-2 duration-200"
        >
          <nav className="flex flex-col space-y-2" aria-label="Mobile Navigation">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    isActive
                      ? "bg-[#FBE3D9] text-[#6B4226] font-semibold"
                      : "text-[#2E211A] hover:bg-[#FBE3D9]/50"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="pt-3">
              <a
                href={getWhatsAppOrderUrl()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#6B4226] text-[#FFF8F0] font-semibold text-center hover:bg-[#54331C] shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-[#E07856]"
              >
                <MessageCircle className="w-4 h-4 text-[#FFF8F0]" />
                <span>Order on WhatsApp</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
