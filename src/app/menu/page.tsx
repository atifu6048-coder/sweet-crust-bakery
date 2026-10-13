"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MessageCircle, Sparkles } from "lucide-react";
import {
  MENU_ITEMS,
  getWhatsAppOrderUrl,
  BAKERY_PHONE_DISPLAY,
} from "@/lib/constants";

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState<"all" | "cakes" | "treats">("all");

  const filteredItems =
    selectedCategory === "all"
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <div className="w-full bg-[#FFF8F0] min-h-screen py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FBE3D9] text-[#6B4226] text-xs sm:text-sm font-semibold tracking-wide border border-[#E07856]/20 mb-4">
            <Sparkles className="w-4 h-4 text-[#E07856]" />
            <span>Baked Fresh Daily • Mardan</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#6B4226] mb-4">
            Our Bakery Menu & Prices
          </h1>
          <p className="text-base sm:text-lg text-[#2E211A]/80 leading-relaxed">
            Every item is baked fresh using pure butter and real ingredients.
            Click any item&apos;s WhatsApp button to instantly prefill your order.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <button
            type="button"
            onClick={() => setSelectedCategory("all")}
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-[#E07856] ${
              selectedCategory === "all"
                ? "bg-[#6B4226] text-[#FFF8F0]"
                : "bg-white text-[#2E211A] border border-[#FBE3D9] hover:bg-[#FBE3D9]/50"
            }`}
            id="filter-all-btn"
          >
            All Items ({MENU_ITEMS.length})
          </button>
          <button
            type="button"
            onClick={() => setSelectedCategory("cakes")}
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-[#E07856] ${
              selectedCategory === "cakes"
                ? "bg-[#6B4226] text-[#FFF8F0]"
                : "bg-white text-[#2E211A] border border-[#FBE3D9] hover:bg-[#FBE3D9]/50"
            }`}
            id="filter-cakes-btn"
          >
            Celebration Cakes (4)
          </button>
          <button
            type="button"
            onClick={() => setSelectedCategory("treats")}
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-[#E07856] ${
              selectedCategory === "treats"
                ? "bg-[#6B4226] text-[#FFF8F0]"
                : "bg-white text-[#2E211A] border border-[#FBE3D9] hover:bg-[#FBE3D9]/50"
            }`}
            id="filter-treats-btn"
          >
            Cupcakes, Brownies & Cookies (4)
          </button>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredItems.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden border border-[#FBE3D9] shadow-sm hover:shadow-xl transition-all flex flex-col group"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#FBE3D9]/30">
                <Image
                  src={product.image}
                  alt={product.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                {product.isBestSeller && (
                  <div className="absolute top-3 left-3 bg-[#E07856] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow">
                    Best Seller
                  </div>
                )}
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h2 className="text-lg font-bold text-[#6B4226] leading-snug">
                      {product.name}
                    </h2>
                  </div>
                  <p className="text-xl font-bold text-[#E07856] mb-3">
                    {product.price}
                  </p>
                  <p className="text-sm text-[#2E211A]/80 leading-relaxed mb-6">
                    {product.description}
                  </p>
                </div>

                <div className="space-y-2">
                  <a
                    href={getWhatsAppOrderUrl(product.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-[#6B4226] text-[#FFF8F0] font-semibold text-sm hover:bg-[#54331C] active:scale-95 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-[#E07856]"
                    id={`menu-order-${product.id}`}
                    aria-label={`Order ${product.name} on WhatsApp`}
                  >
                    <MessageCircle className="w-4 h-4 text-[#FFF8F0]" />
                    <span>Order on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Order Box */}
        <div className="mt-16 bg-[#FBE3D9]/40 border-2 border-[#FBE3D9] rounded-3xl p-8 sm:p-10 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-[#6B4226] mb-3">
            Looking for a custom cake design or event order?
          </h3>
          <p className="text-sm sm:text-base text-[#2E211A]/85 mb-6 max-w-xl mx-auto">
            We make customized birthday, engagement, and theme cakes with your favorite colors and message.
            Starting from Rs 3,500. Chat with us on WhatsApp or call us at {BAKERY_PHONE_DISPLAY}.
          </p>
          <a
            href={getWhatsAppOrderUrl("Custom Cake Inquiry")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#E07856] text-[#FFF8F0] font-semibold text-sm shadow hover:bg-[#D26442] transition-all"
            id="menu-custom-cake-whatsapp-btn"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Inquire About Custom Cake</span>
          </a>
        </div>
      </div>
    </div>
  );
}
