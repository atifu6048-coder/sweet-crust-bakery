import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MessageCircle,
  ShoppingBag,
  Star,
  Truck,
  Cake,
  Clock,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full bg-[#fff8f1]">
      {/* 1. Hero Section */}
      <section className="w-full max-w-[1200px] mx-auto px-5 lg:px-6 pt-6 lg:pt-10 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-6 flex flex-col items-start gap-4">
            <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-[#ffdbd0] text-[#9b4426] text-xs font-semibold uppercase tracking-wider">
              <Cake className="w-4 h-4 text-[#9b4426]" />
              <span>Artisanal Home Bakery • Mardan</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-[48px] lg:leading-[56px] font-bold text-[#502c12] tracking-tight">
              Fresh Cakes, Baked with Love
            </h1>

            <p className="text-base sm:text-lg text-[#51443d] max-w-lg leading-relaxed">
              Sweet Crust Bakery bakes fresh cakes, cupcakes and brownies in Mardan - made to order, just for you.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <Link
                href="/menu"
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-xl bg-[#6b4226] text-white text-sm font-semibold hover:bg-[#502c12] transition-all duration-200 shadow-[0_8px_20px_-4px_rgba(107,66,38,0.2)]"
                id="hero-see-menu-btn"
              >
                See Our Menu
              </Link>

              <a
                href="https://wa.me/923001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-white text-[#6b4226] text-sm font-semibold shadow-[0_8px_24px_-4px_rgba(107,66,38,0.08)] hover:bg-[#f4ede5] transition-all duration-200"
                id="hero-whatsapp-btn"
              >
                <MessageCircle className="w-4 h-4 text-[#6b4226]" />
                <span>Order on WhatsApp</span>
              </a>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-1.5">
                <Star className="w-5 h-5 text-[#9b4426] fill-[#9b4426]" />
                <span className="text-sm font-semibold text-[#502c12]">5.0 Star Bakes</span>
              </div>
              <span className="w-1.5 h-1.5 rounded-full bg-[#d5c3b9]"></span>
              <div className="flex items-center gap-1.5">
                <Truck className="w-5 h-5 text-[#9b4426]" />
                <span className="text-sm text-[#51443d]">Mardan Fast Delivery</span>
              </div>
            </div>
          </div>

          {/* Right Hero Image Card */}
          <div className="lg:col-span-6 relative mt-4 lg:mt-0">
            <div className="relative w-full rounded-2xl overflow-hidden shadow-[0_16px_36px_-6px_rgba(107,66,38,0.18)] bg-[#f4ede5]">
              <div className="relative w-full h-[380px] sm:h-[460px]">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDe6rDh4y4b8qd0RhpUrjsfajkCSU5KY2YUGAyJTSKpkA6vsEFWO119qT8Q08_pfZlyZgxQdl_4de0fzDepmeoANFquo6AZtIuK9cg17nYRTNCn1RDMvdPwFBT352ds5iC44qmEo1czsNTcIfDiOmQT3-KCYqnMvZVImh-1NIHj36ERJNSf0wX9d7dOQjq2R4pr4yq3090dkxLTZ-YpvYt6mW4w3BrmumU9AG9rFLI2qA0KkPuqLT6G"
                  alt="Artisanal chocolate fudge cake and tiered strawberry cream cake baked fresh daily"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center transform hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Bottom Overlay Pill */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md shadow-[0_8px_20px_-4px_rgba(107,66,38,0.12)] flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-[#502c12]">Today&apos;s Oven Special</p>
                  <p className="text-xs text-[#51443d]">Strawberry Drip &amp; Dark Fudge</p>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#ffdbd0] text-[#7c2d11] text-xs font-semibold">
                  Baked This Morning
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Welcome Section */}
      <section className="w-full bg-[#f9f3eb] py-10 my-4">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-6">
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-2">
            <span className="text-xs uppercase tracking-widest text-[#9b4426] font-semibold">
              Handcrafted in Small Batches
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#502c12] tracking-tight">
              Welcome to Sweet Crust Bakery
            </h2>
            <div className="w-12 h-1 rounded-full bg-[#fe906c] mb-1"></div>
            <p className="text-base sm:text-lg text-[#51443d] leading-relaxed">
              Every cake leaves my kitchen fresh, soft and full of flavour. I bake small batches every day, so you always get the best taste - for birthdays, weddings or a sweet evening at home.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4 w-full pt-2">
              <div className="p-4 rounded-xl bg-white shadow-[0_4px_16px_-4px_rgba(107,66,38,0.06)] flex flex-col items-center">
                <span className="text-2xl font-bold text-[#9b4426]">100%</span>
                <span className="text-xs sm:text-sm text-[#51443d]">Fresh Butter &amp; Cream</span>
              </div>
              <div className="p-4 rounded-xl bg-white shadow-[0_4px_16px_-4px_rgba(107,66,38,0.06)] flex flex-col items-center">
                <span className="text-2xl font-bold text-[#9b4426]">Daily</span>
                <span className="text-xs sm:text-sm text-[#51443d]">Oven-Fresh Batches</span>
              </div>
              <div className="col-span-2 sm:col-span-1 p-4 rounded-xl bg-white shadow-[0_4px_16px_-4px_rgba(107,66,38,0.06)] flex flex-col items-center">
                <span className="text-2xl font-bold text-[#9b4426]">Mardan</span>
                <span className="text-xs sm:text-sm text-[#51443d]">Doorstep Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Best Sellers Section */}
      <section className="w-full max-w-[1200px] mx-auto px-5 lg:px-6 py-10">
        <div className="flex flex-col items-center text-center mb-8 gap-1">
          <span className="text-xs uppercase tracking-widest text-[#9b4426] font-semibold">
            Customer Favorites
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#502c12] tracking-tight">
            Our Best Sellers
          </h2>
          <p className="text-sm sm:text-base text-[#51443d] max-w-md">
            Freshly whipped, delicately decorated, and baked to delight your sweetest moments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 - Chocolate Fudge Cake */}
          <div className="group flex flex-col rounded-2xl bg-[#f9f3eb] overflow-hidden shadow-[0_8px_24px_-4px_rgba(107,66,38,0.08)] hover:shadow-[0_14px_32px_-4px_rgba(107,66,38,0.14)] transition-all duration-300">
            <div className="relative w-full h-64 overflow-hidden bg-[#f4ede5]">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfkaWn-8FrXBYQt4l8TH6kp86WY9yWIGjlVRFbfPVE2mjmfbzH9Hdl8mOwsL1OVXYgX1l2wru7OtaKhTHTClLVL2ujo_RLj1aeaWLYDTMLiNJdhNDIDTpOIjBZ0nDfDofuoIG8z5ZAgyZwokX1juBWD0Sob9w2i8qCA9TW8LREfWrZ5o2hTjXysGfNG94mqiWlAnnb3qyFWShan8WWzoOF59Mo3LWOTi5yMdh3Vl5su0CecPcSP8C3"
                alt="Rich multi-layered chocolate fudge cake with dark decadent frosting"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#ffdbd0] text-[#9b4426] text-xs font-semibold uppercase tracking-wider">
                Bestseller
              </div>
            </div>
            <div className="p-6 flex flex-col flex-1 justify-between gap-4">
              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-semibold text-[#502c12]">
                  Chocolate Fudge Cake
                </h3>
                <p className="text-sm text-[#51443d]">
                  Rich, dark and super soft.
                </p>
              </div>
              <div className="flex items-center justify-between pt-2 mt-auto">
                <span className="text-xl font-bold text-[#9b4426]">
                  Rs 2,800
                </span>
                <a
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#6b4226] text-white text-sm font-semibold hover:bg-[#502c12] transition-all duration-200 shadow-[0_4px_12px_-2px_rgba(107,66,38,0.25)]"
                  href="https://wa.me/923001234567?text=Hi%20Sweet%20Crust%20Bakery,%20I%20would%20like%20to%20order%20the%20Chocolate%20Fudge%20Cake."
                  target="_blank"
                  rel="noopener noreferrer"
                  id="best-seller-order-chocolate-fudge"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Order</span>
                </a>
              </div>
            </div>
          </div>

          {/* Card 2 - Strawberry Cream Cake */}
          <div className="group flex flex-col rounded-2xl bg-[#f9f3eb] overflow-hidden shadow-[0_8px_24px_-4px_rgba(107,66,38,0.08)] hover:shadow-[0_14px_32px_-4px_rgba(107,66,38,0.14)] transition-all duration-300">
            <div className="relative w-full h-64 overflow-hidden bg-[#f4ede5]">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-XWcLyiBu6392bHwmLj9NEGOcIXGKPRekiTM_Q_0WV22RAfseu52F29TObc8lr1nproIOKCgt-WvTBjXIxQCXampX9bkruF4zftFqTU9ZKOG28kfrHR5b8b8AkXcCfSJdyBO0f6qeMIRtB1ch4slxpClP0E3hwrn3wLto6D_2SoSrwLRSm4Wwzy9tF-d9lro9hRqfNxBU24ltP0RtrXvBvgcDQsOimwo6gV4mb0TYKWo_9ekE5Q_h"
                alt="Fresh strawberry cream cake with pink fruit glaze and fresh berries"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#ffdbd0] text-[#9b4426] text-xs font-semibold uppercase tracking-wider">
                Fresh Pick
              </div>
            </div>
            <div className="p-6 flex flex-col flex-1 justify-between gap-4">
              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-semibold text-[#502c12]">
                  Strawberry Cream Cake
                </h3>
                <p className="text-sm text-[#51443d]">
                  Fresh strawberries with soft cream.
                </p>
              </div>
              <div className="flex items-center justify-between pt-2 mt-auto">
                <span className="text-xl font-bold text-[#9b4426]">
                  Rs 3,200
                </span>
                <a
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#6b4226] text-white text-sm font-semibold hover:bg-[#502c12] transition-all duration-200 shadow-[0_4px_12px_-2px_rgba(107,66,38,0.25)]"
                  href="https://wa.me/923001234567?text=Hi%20Sweet%20Crust%20Bakery,%20I%20would%20like%20to%20order%20the%20Strawberry%20Cream%20Cake."
                  target="_blank"
                  rel="noopener noreferrer"
                  id="best-seller-order-strawberry-cream"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Order</span>
                </a>
              </div>
            </div>
          </div>

          {/* Card 3 - Party Cupcakes (Box of 6) */}
          <div className="group flex flex-col rounded-2xl bg-[#f9f3eb] overflow-hidden shadow-[0_8px_24px_-4px_rgba(107,66,38,0.08)] hover:shadow-[0_14px_32px_-4px_rgba(107,66,38,0.14)] transition-all duration-300">
            <div className="relative w-full h-64 overflow-hidden bg-[#f4ede5]">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcjj3OPhoacjsl_dtcjtoB8NedMCnSR1y5NOnnSv3CAvTFHJCFQHuhE7CThZYf9fv98M6AqmlTz3l_ufqrD12GdcYwuJJAJJKqWaCSrTqFbiJ2hWxxQT0VDkKiGcYQp4Ts94d1tenK8BoYRbTnr1P7vJTRUaFFsXqT4cAvi1FKnyiFJszZu3_r7eVKaTkjEGftmYdeuEsIkgaU1pqbqUt-x93WwLO9PhVtpKDTzDehGsF_ihZI30Fz"
                alt="Box of six artisanal party cupcakes with swirl piped frosting"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#ffdbd0] text-[#9b4426] text-xs font-semibold uppercase tracking-wider">
                Box of 6
              </div>
            </div>
            <div className="p-6 flex flex-col flex-1 justify-between gap-4">
              <div className="flex flex-col gap-1">
                <h3 className="text-xl font-semibold text-[#502c12]">
                  Party Cupcakes (Box of 6)
                </h3>
                <p className="text-sm text-[#51443d]">
                  Colourful cupcakes for happy days.
                </p>
              </div>
              <div className="flex items-center justify-between pt-2 mt-auto">
                <span className="text-xl font-bold text-[#9b4426]">
                  Rs 1,500
                </span>
                <a
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#6b4226] text-white text-sm font-semibold hover:bg-[#502c12] transition-all duration-200 shadow-[0_4px_12px_-2px_rgba(107,66,38,0.25)]"
                  href="https://wa.me/923001234567?text=Hi%20Sweet%20Crust%20Bakery,%20I%20would%20like%20to%20order%20the%20Party%20Cupcakes%20(Box%20of%206)."
                  target="_blank"
                  rel="noopener noreferrer"
                  id="best-seller-order-party-cupcakes"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Order</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us Section */}
      <section className="w-full bg-[#f9f3eb] py-10 my-4">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-6">
          <div className="flex flex-col items-center text-center mb-8 gap-1">
            <span className="text-xs uppercase tracking-widest text-[#9b4426] font-semibold">
              Our Promise To You
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#502c12] tracking-tight">
              Why Choose Us
            </h2>
            <div className="w-12 h-1 rounded-full bg-[#fe906c] mb-1"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <div className="p-6 rounded-2xl bg-white shadow-[0_8px_24px_-4px_rgba(107,66,38,0.06)] flex flex-col gap-2 hover:-translate-y-1 transition-transform duration-200">
              <div className="w-12 h-12 rounded-xl bg-[#ffdbd0] flex items-center justify-center text-[#9b4426]">
                <Clock className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold text-[#502c12]">
                Baked Fresh Daily
              </h3>
              <p className="text-sm text-[#51443d] leading-relaxed">
                Prepared every morning for peak flavor and moisture.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 rounded-2xl bg-white shadow-[0_8px_24px_-4px_rgba(107,66,38,0.06)] flex flex-col gap-2 hover:-translate-y-1 transition-transform duration-200">
              <div className="w-12 h-12 rounded-xl bg-[#ffdbd0] flex items-center justify-center text-[#9b4426]">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold text-[#502c12]">
                Best Quality Ingredients
              </h3>
              <p className="text-sm text-[#51443d] leading-relaxed">
                Pure butter, rich cocoa, and farm-fresh dairy in every batch.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 rounded-2xl bg-white shadow-[0_8px_24px_-4px_rgba(107,66,38,0.06)] flex flex-col gap-2 hover:-translate-y-1 transition-transform duration-200">
              <div className="w-12 h-12 rounded-xl bg-[#ffdbd0] flex items-center justify-center text-[#9b4426]">
                <Cake className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold text-[#502c12]">
                Made to Order
              </h3>
              <p className="text-sm text-[#51443d] leading-relaxed">
                Customized fresh specifically for your special celebration.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="p-6 rounded-2xl bg-white shadow-[0_8px_24px_-4px_rgba(107,66,38,0.06)] flex flex-col gap-2 hover:-translate-y-1 transition-transform duration-200">
              <div className="w-12 h-12 rounded-xl bg-[#ffdbd0] flex items-center justify-center text-[#9b4426]">
                <Truck className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold text-[#502c12]">
                Home Delivery in Mardan
              </h3>
              <p className="text-sm text-[#51443d] leading-relaxed">
                Prompt, safe, and doorstep delivery across Mardan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. What Customers Say Section */}
      <section className="w-full max-w-[1200px] mx-auto px-5 lg:px-6 py-10">
        <div className="flex flex-col items-center text-center mb-8 gap-1">
          <span className="text-xs uppercase tracking-widest text-[#9b4426] font-semibold">
            Sweet Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#502c12] tracking-tight">
            What Customers Say
          </h2>
          <p className="text-sm sm:text-base text-[#51443d] max-w-md">
            Cherished stories from our community in Mardan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Testimonial 1 */}
          <div className="p-8 sm:p-10 rounded-2xl bg-[#ffdbd0] shadow-[0_8px_24px_-4px_rgba(107,66,38,0.08)] flex flex-col justify-between gap-4">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-1 text-[#9b4426]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#9b4426]" />
                ))}
              </div>
              <p className="text-lg text-[#502c12] leading-relaxed italic">
                &ldquo;The chocolate cake was so soft and fresh. My whole family loved it!&rdquo;
              </p>
            </div>
            <div className="flex items-center gap-3 pt-2">
              <div className="w-10 h-10 rounded-full bg-[#6b4226] text-white flex items-center justify-center font-semibold text-sm">
                F
              </div>
              <div>
                <p className="font-semibold text-[#502c12]">Fatima</p>
                <p className="text-xs text-[#7c2d11]">Mardan</p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="p-8 sm:p-10 rounded-2xl bg-[#ffdbd0] shadow-[0_8px_24px_-4px_rgba(107,66,38,0.08)] flex flex-col justify-between gap-4">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-1 text-[#9b4426]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#9b4426]" />
                ))}
              </div>
              <p className="text-lg text-[#502c12] leading-relaxed italic">
                &ldquo;Best cupcakes in the city. I order every month for my office.&rdquo;
              </p>
            </div>
            <div className="flex items-center gap-3 pt-2">
              <div className="w-10 h-10 rounded-full bg-[#6b4226] text-white flex items-center justify-center font-semibold text-sm">
                A
              </div>
              <div>
                <p className="font-semibold text-[#502c12]">Ahmed</p>
                <p className="text-xs text-[#7c2d11]">Mardan</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Final Call-To-Action Banner */}
      <section className="w-full max-w-[1200px] mx-auto px-5 lg:px-6 py-10">
        <div className="relative overflow-hidden rounded-3xl bg-[#6b4226] p-8 sm:p-12 text-center flex flex-col items-center justify-center gap-4 shadow-[0_16px_36px_-6px_rgba(107,66,38,0.25)]">
          {/* Ambient blur circles */}
          <div className="absolute -right-16 -top-16 w-56 h-56 rounded-full bg-[#fe906c]/20 blur-2xl pointer-events-none"></div>
          <div className="absolute -left-16 -bottom-16 w-56 h-56 rounded-full bg-[#ffdbd0]/20 blur-2xl pointer-events-none"></div>

          <span className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-[#502c12] text-[#ffdbd0] text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-[#ffdbd0]" />
            <span>Custom Celebrations &amp; Daily Treats</span>
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight max-w-xl">
            Ready to Order Something Sweet?
          </h2>

          <p className="text-sm sm:text-base text-[#e9b08c] max-w-md">
            Send us a quick message with your date, flavor ideas, or favorite cake from our menu. We&apos;ll bake it fresh for you!
          </p>

          <div className="pt-2">
            <a
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-[#fff8f1] text-[#502c12] font-semibold text-base hover:bg-[#f4ede5] transition-all duration-200 shadow-[0_8px_20px_rgba(0,0,0,0.15)]"
              href="https://wa.me/923001234567?text=Hi%20Sweet%20Crust%20Bakery,%20I'd%20like%20to%20place%20an%20order!"
              target="_blank"
              rel="noopener noreferrer"
              id="cta-chat-whatsapp-btn"
            >
              <MessageCircle className="w-5 h-5 text-[#9b4426]" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
