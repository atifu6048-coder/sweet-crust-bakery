"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MessageCircle, Camera } from "lucide-react";
import { GALLERY_ITEMS, getWhatsAppOrderUrl } from "@/lib/constants";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", "Cakes", "Cupcakes", "Brownies", "Cookies"];

  const filteredItems =
    activeCategory === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter(
          (item) => item.category.toLowerCase() === activeCategory.toLowerCase()
        );

  return (
    <div className="w-full bg-[#FFF8F0] min-h-screen py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FBE3D9] text-[#6B4226] text-xs sm:text-sm font-semibold tracking-wide border border-[#E07856]/20 mb-4">
            <Camera className="w-4 h-4 text-[#E07856]" />
            <span>Our Fresh Creations</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#6B4226] mb-4">
            Bakery Gallery
          </h1>
          <p className="text-base sm:text-lg text-[#2E211A]/80 leading-relaxed">
            Take a look at recent cakes, cupcakes, brownies, and cookies baked
            fresh for families and celebrations across Mardan.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-[#E07856] ${
                activeCategory === cat
                  ? "bg-[#6B4226] text-[#FFF8F0]"
                  : "bg-white text-[#2E211A] border border-[#FBE3D9] hover:bg-[#FBE3D9]/50"
              }`}
              id={`gallery-filter-${cat.toLowerCase()}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden border border-[#FBE3D9] shadow-sm hover:shadow-xl transition-all flex flex-col group"
            >
              <div className="relative aspect-square w-full overflow-hidden bg-[#FBE3D9]/20">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#6B4226]/85 backdrop-blur-xs text-[#FFF8F0] text-xs font-semibold px-3 py-1 rounded-full">
                  {item.category}
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="text-base font-bold text-[#6B4226] mb-2 leading-tight">
                    {item.title}
                  </h2>
                </div>

                <div className="pt-3 border-t border-[#FBE3D9]/60">
                  <a
                    href={getWhatsAppOrderUrl(item.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-full bg-[#FBE3D9] text-[#6B4226] hover:bg-[#E07856] hover:text-white font-semibold text-xs transition-colors"
                    id={`gallery-order-${item.id}`}
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Order This Design</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 bg-[#FBE3D9]/30 rounded-3xl p-8 text-center max-w-2xl mx-auto border border-[#FBE3D9]">
          <h3 className="text-xl font-bold text-[#6B4226] mb-2">
            Have a custom design or reference photo?
          </h3>
          <p className="text-sm text-[#2E211A]/80 mb-5">
            Share your favorite picture on WhatsApp and we will discuss flavor,
            serving sizes, and pricing directly with you.
          </p>
          <a
            href={getWhatsAppOrderUrl("Custom Design from Photo")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#6B4226] text-[#FFF8F0] font-semibold text-sm hover:bg-[#54331C] transition-all"
            id="gallery-custom-photo-whatsapp"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Send Photo on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
