import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  Clock,
  Tag,
  Sparkles,
  MessageCircle,
  Phone,
  CheckCircle2,
} from "lucide-react";
import {
  BAKERY_NAME,
  BAKERY_CITY,
  BAKERY_PHONE_DISPLAY,
  ABOUT_VALUES,
  getWhatsAppOrderUrl,
} from "@/lib/constants";

export const metadata = {
  title: "About Us",
  description:
    "Learn about Sweet Crust Bakery, a proud home bakery in Mardan, Pakistan dedicated to fresh baking, honest prices, and handcrafted quality.",
};

export default function AboutPage() {
  const getValueIcon = (iconName: string) => {
    switch (iconName) {
      case "Clock":
        return <Clock className="w-6 h-6 text-[#E07856]" />;
      case "Tag":
        return <Tag className="w-6 h-6 text-[#E07856]" />;
      case "Heart":
        return <Heart className="w-6 h-6 text-[#E07856]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#E07856]" />;
    }
  };

  return (
    <div className="w-full bg-[#FFF8F0] min-h-screen py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Banner */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FBE3D9] text-[#6B4226] text-xs sm:text-sm font-semibold tracking-wide border border-[#E07856]/20 mb-4">
            <Heart className="w-4 h-4 text-[#E07856]" />
            <span>Our Story • Home Bakery in {BAKERY_CITY}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#6B4226] mb-4">
            About {BAKERY_NAME}
          </h1>
          <p className="text-base sm:text-lg text-[#2E211A]/80 leading-relaxed">
            From our family kitchen in Mardan to your celebrations. Baking
            fresh, honest, and joyful treats from scratch every day.
          </p>
        </div>

        {/* Story Section with Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border-4 border-white">
              <Image
                src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80"
                alt="Baking fresh cakes with love in the kitchen at Sweet Crust Bakery"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white border border-[#FBE3D9] p-5 rounded-2xl shadow-lg hidden sm:block">
              <p className="text-2xl font-bold text-[#6B4226]">100%</p>
              <p className="text-xs text-[#2E211A]/80 font-medium">
                Home-Baked Fresh in Mardan
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#6B4226]">
              A Passion For Real, Oven-Fresh Baking
            </h2>
            <p className="text-[#2E211A]/85 leading-relaxed">
              <span className="font-semibold text-[#6B4226]">{BAKERY_NAME}</span>{" "}
              was born out of a genuine love for authentic homemade cakes.
              Dissatisfied with commercial bakery shortcuts and artificial flavors,
              we set out to bring Mardan authentic, warm, oven-fresh baking.
            </p>
            <p className="text-[#2E211A]/85 leading-relaxed">
              Every sponge is baked fresh only when you order. We never keep pre-made
              cakes sitting in freezers. When you receive a Sweet Crust cake, it
              was made that very morning specifically for your event.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm text-[#2E211A]">
                <CheckCircle2 className="w-5 h-5 text-[#E07856] shrink-0" />
                <span>Pure dairy butter, farm-fresh eggs, and rich cocoa</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#2E211A]">
                <CheckCircle2 className="w-5 h-5 text-[#E07856] shrink-0" />
                <span>Small batch preparation ensuring personal quality control</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-[#2E211A]">
                <CheckCircle2 className="w-5 h-5 text-[#E07856] shrink-0" />
                <span>Personalized design consultations on WhatsApp</span>
              </div>
            </div>
          </div>
        </div>

        {/* Our Values Section */}
        <div className="bg-[#FBE3D9]/30 border border-[#FBE3D9] rounded-3xl p-8 sm:p-12 mb-20">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#E07856] mb-2">
              Our Guiding Principles
            </h2>
            <h3 className="text-3xl font-bold text-[#6B4226]">
              Our Simple Three Values
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ABOUT_VALUES.map((val, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-[#FBE3D9] shadow-sm text-center flex flex-col items-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#FBE3D9] flex items-center justify-center mb-4">
                  {getValueIcon(val.iconName)}
                </div>
                <h4 className="text-xl font-bold text-[#6B4226] mb-2">
                  {val.title}
                </h4>
                <p className="text-base text-[#2E211A]/80">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call To Action */}
        <div className="text-center max-w-2xl mx-auto bg-white rounded-3xl p-8 sm:p-10 border border-[#FBE3D9] shadow-sm">
          <h3 className="text-2xl font-bold text-[#6B4226] mb-3">
            Want to taste the Sweet Crust difference?
          </h3>
          <p className="text-sm sm:text-base text-[#2E211A]/80 mb-6">
            Browse our menu or reach out to us directly on WhatsApp or by phone.
            We are always happy to answer your questions.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#6B4226] text-[#FFF8F0] font-semibold text-sm hover:bg-[#54331C] transition-all"
            >
              <span>Explore Our Menu</span>
            </Link>
            <a
              href={getWhatsAppOrderUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#E07856] text-[#FFF8F0] font-semibold text-sm hover:bg-[#D26442] transition-all"
              id="about-whatsapp-btn"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
            <a
              href="tel:03001234567"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#6B4226] text-[#6B4226] font-semibold text-sm hover:bg-[#FBE3D9]/50 transition-all"
              id="about-call-btn"
            >
              <Phone className="w-4 h-4" />
              <span>{BAKERY_PHONE_DISPLAY}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
