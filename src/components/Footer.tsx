import React from "react";
import Link from "next/link";
import { MapPin, Phone, Clock } from "lucide-react";
import {
  BAKERY_NAME,
  BAKERY_PHONE_DISPLAY,
  BAKERY_CITY,
} from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#f9f3eb] mt-10 border-t border-[#d5c3b9]/30">
      <div className="max-w-[1200px] mx-auto px-5 lg:px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Brand Col */}
          <div className="md:col-span-5 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="font-bold text-xl text-[#502c12]">
                {BAKERY_NAME}
              </span>
            </div>
            <p className="text-sm text-[#51443d] max-w-sm leading-relaxed">
              Small-batch homemade cakes, cupcakes and sweet treats baked fresh
              daily with love in our Mardan kitchen.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 flex flex-col gap-1">
            <span className="font-semibold text-base text-[#502c12] mb-1">
              Explore
            </span>
            <nav className="flex flex-col gap-1 text-sm text-[#51443d]">
              <Link href="/" className="hover:text-[#1e1b17] transition-colors py-0.5">
                Home
              </Link>
              <Link href="/menu" className="hover:text-[#1e1b17] transition-colors py-0.5">
                Menu
              </Link>
              <Link href="/about" className="hover:text-[#1e1b17] transition-colors py-0.5">
                About
              </Link>
              <Link href="/gallery" className="hover:text-[#1e1b17] transition-colors py-0.5">
                Gallery
              </Link>
              <Link href="/contact" className="hover:text-[#1e1b17] transition-colors py-0.5">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 flex flex-col gap-2">
            <span className="font-semibold text-base text-[#502c12] mb-1">
              Visit &amp; Inquiries
            </span>
            <div className="flex items-center gap-2 text-[#51443d] text-sm">
              <MapPin className="w-4 h-4 text-[#9b4426] shrink-0" />
              <span>{BAKERY_CITY}</span>
            </div>
            <div className="flex items-center gap-2 text-[#51443d] text-sm">
              <Phone className="w-4 h-4 text-[#9b4426] shrink-0" />
              <a href="tel:03001234567" className="hover:text-[#1e1b17] transition-colors">
                {BAKERY_PHONE_DISPLAY}
              </a>
            </div>
            <div className="flex items-center gap-2 text-[#51443d] text-sm">
              <Clock className="w-4 h-4 text-[#9b4426] shrink-0" />
              <span>Pre-orders &amp; Fresh Bakes daily</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-[#d5c3b9]/40 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-[#51443d]">
          <p>Copyright {currentYear} {BAKERY_NAME}. Made with love in Mardan.</p>
          <div className="flex items-center gap-4">
            <span className="text-xs font-medium text-[#40322b]">
              Artisanal Quality
            </span>
            <span className="w-1 h-1 rounded-full bg-[#d5c3b9]"></span>
            <span className="text-xs font-medium text-[#40322b]">
              Oven Fresh
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
