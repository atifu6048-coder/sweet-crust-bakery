import React from "react";
import Link from "next/link";
import {
  Cake,
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Heart,
} from "lucide-react";
import {
  BAKERY_NAME,
  BAKERY_PHONE_DISPLAY,
  BAKERY_EMAIL,
  BAKERY_ADDRESS,
  BAKERY_HOURS,
  getWhatsAppOrderUrl,
} from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2E211A] text-[#FFF8F0] pt-14 pb-8 border-t-4 border-[#E07856]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 text-[#FFF8F0] hover:text-[#FBE3D9] transition-colors"
              aria-label={`${BAKERY_NAME} - Home`}
            >
              <div className="w-10 h-10 rounded-full bg-[#E07856] flex items-center justify-center text-[#FFF8F0]">
                <Cake className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight block">
                  {BAKERY_NAME}
                </span>
                <span className="text-xs text-[#FBE3D9]/80 block">
                  Home Bakery • Mardan
                </span>
              </div>
            </Link>
            <p className="text-sm text-[#FFF8F0]/80 leading-relaxed">
              Handcrafted cakes, cupcakes, brownies, and cookies baked fresh
              daily in Mardan. Pure ingredients, made to order with love.
            </p>
            <div>
              <a
                href={getWhatsAppOrderUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E07856] text-[#FFF8F0] text-sm font-semibold hover:bg-[#D26442] transition-colors"
                id="footer-whatsapp-btn"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Order on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-semibold text-[#FBE3D9] uppercase tracking-wider mb-4">
              Quick Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-[#FFF8F0]/80 hover:text-[#E07856] transition-colors block py-0.5"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/menu"
                  className="text-[#FFF8F0]/80 hover:text-[#E07856] transition-colors block py-0.5"
                >
                  Menu & Prices
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-[#FFF8F0]/80 hover:text-[#E07856] transition-colors block py-0.5"
                >
                  About Our Bakery
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-[#FFF8F0]/80 hover:text-[#E07856] transition-colors block py-0.5"
                >
                  Photo Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-[#FFF8F0]/80 hover:text-[#E07856] transition-colors block py-0.5"
                >
                  Contact & Orders
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-base font-semibold text-[#FBE3D9] uppercase tracking-wider mb-4">
              Get in Touch
            </h3>
            <ul className="space-y-3 text-sm text-[#FFF8F0]/80">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E07856] shrink-0 mt-1" />
                <span>{BAKERY_ADDRESS}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#E07856] shrink-0" />
                <a
                  href="tel:03001234567"
                  className="hover:text-[#FBE3D9] transition-colors font-medium"
                >
                  {BAKERY_PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#E07856] shrink-0" />
                <a
                  href={`mailto:${BAKERY_EMAIL}`}
                  className="hover:text-[#FBE3D9] transition-colors"
                >
                  {BAKERY_EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <a
                  href={getWhatsAppOrderUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FBE3D9] transition-colors"
                >
                  WhatsApp: {BAKERY_PHONE_DISPLAY}
                </a>
              </li>
            </ul>
          </div>

          {/* Operating Hours */}
          <div>
            <h3 className="text-base font-semibold text-[#FBE3D9] uppercase tracking-wider mb-4">
              Opening Hours
            </h3>
            <div className="bg-[#6B4226]/40 p-4 rounded-xl border border-[#FBE3D9]/20 space-y-2 text-sm text-[#FFF8F0]/90">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#E07856] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-[#FFF8F0]">Schedule:</p>
                  <p className="text-xs text-[#FFF8F0]/80 leading-relaxed">{BAKERY_HOURS}</p>
                </div>
              </div>
              <p className="text-xs text-[#FFF8F0]/70 italic pt-1">
                Deliveries across Mardan city
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#FBE3D9]/15 flex flex-col sm:flex-row items-center justify-between text-xs text-[#FFF8F0]/70 gap-4">
          <p>© {currentYear} {BAKERY_NAME}. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Baked with</span>
            <Heart className="w-3.5 h-3.5 text-[#E07856] fill-[#E07856]" />
            <span>in Mardan, Pakistan</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
