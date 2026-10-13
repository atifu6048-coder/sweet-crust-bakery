import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MessageCircle,
  Phone,
  ArrowRight,
  Sparkles,
  Flame,
  HeartHandshake,
  Truck,
  Star,
  Cake,
  Clock,
  ShieldCheck,
} from "lucide-react";
import {
  BAKERY_NAME,
  BAKERY_PHONE_DISPLAY,
  BAKERY_HOURS,
  MENU_ITEMS,
  WHY_CHOOSE_US,
  TESTIMONIALS,
  getWhatsAppOrderUrl,
} from "@/lib/constants";

export default function HomePage() {
  const bestSellers = MENU_ITEMS.filter((item) => item.isBestSeller);

  // Map icon name to lucide icon component
  const getFeatureIcon = (name: string) => {
    switch (name) {
      case "Flame":
        return <Flame className="w-6 h-6 text-[#E07856]" />;
      case "Sparkles":
        return <Sparkles className="w-6 h-6 text-[#E07856]" />;
      case "HeartHandshake":
        return <HeartHandshake className="w-6 h-6 text-[#E07856]" />;
      case "Truck":
        return <Truck className="w-6 h-6 text-[#E07856]" />;
      default:
        return <Cake className="w-6 h-6 text-[#E07856]" />;
    }
  };

  return (
    <div className="flex flex-col w-full bg-[#FFF8F0]">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 md:py-24 bg-gradient-to-b from-[#FBE3D9]/40 via-[#FFF8F0] to-[#FFF8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FBE3D9] text-[#6B4226] text-xs sm:text-sm font-semibold tracking-wide border border-[#E07856]/20">
                <Sparkles className="w-4 h-4 text-[#E07856]" />
                <span>Home Bakery in Mardan • Baked Fresh to Order</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#2E211A] leading-[1.15]">
                Fresh, Homemade Delights{" "}
                <span className="text-[#6B4226] block sm:inline">
                  Baked Just For You
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-[#2E211A]/80 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Welcome to <span className="font-semibold text-[#6B4226]">{BAKERY_NAME}</span>.
                We craft rich chocolate fudge cakes, celebration bakes, soft cupcakes,
                and melt-in-your-mouth brownies made with pure butter and real ingredients.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <Link
                  href="/menu"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#6B4226] text-[#FFF8F0] font-semibold text-base shadow-md hover:bg-[#54331C] active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-[#E07856]"
                  id="hero-view-menu-btn"
                >
                  <span>Explore Menu</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={getWhatsAppOrderUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#E07856] text-[#FFF8F0] font-semibold text-base shadow-md hover:bg-[#D26442] active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-[#6B4226]"
                  id="hero-order-whatsapp-btn"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Order on WhatsApp</span>
                </a>

                <a
                  href="tel:03001234567"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border-2 border-[#6B4226] text-[#6B4226] font-semibold text-base hover:bg-[#FBE3D9]/60 transition-all focus:outline-none focus:ring-2 focus:ring-[#6B4226]"
                  id="hero-call-btn"
                >
                  <Phone className="w-4 h-4 text-[#6B4226]" />
                  <span>{BAKERY_PHONE_DISPLAY}</span>
                </a>
              </div>

              {/* Trust Badges */}
              <div className="pt-6 border-t border-[#FBE3D9] flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs sm:text-sm text-[#2E211A]/80">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#E07856]" />
                  <span>100% Pure Butter & Dairy</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#E07856]" />
                  <span>Fresh Every Day</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-[#E07856]" />
                  <span>Mardan City Delivery</span>
                </div>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div className="relative aspect-[4/3] sm:aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                  <Image
                    src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=80"
                    alt="Signature Chocolate Fudge Cake from Sweet Crust Bakery"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    className="object-cover object-center transform hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="px-3 py-1 rounded-full bg-[#E07856] text-xs font-bold uppercase tracking-wider text-white inline-block mb-2">
                      Customer Favourite
                    </span>
                    <h3 className="text-xl font-bold">Chocolate Fudge Cake</h3>
                    <p className="text-sm text-white/90">Rs 2,800 • Rich, dark and super soft</p>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-6 -left-6 bg-[#FFF8F0] border-2 border-[#FBE3D9] p-4 rounded-2xl shadow-xl flex items-center gap-3 hidden sm:flex">
                  <div className="w-12 h-12 rounded-xl bg-[#FBE3D9] flex items-center justify-center">
                    <Cake className="w-6 h-6 text-[#6B4226]" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#E07856] uppercase tracking-wider">
                      Handcrafted
                    </p>
                    <p className="text-sm font-bold text-[#2E211A]">Home-Baked in Mardan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-20 bg-[#FFF8F0] border-t border-[#FBE3D9]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#E07856] mb-2">
              Our Promise
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-[#6B4226]">
              Why Choose Sweet Crust Bakery?
            </h3>
            <p className="text-base text-[#2E211A]/80 mt-3">
              We believe in honest baking, genuine hospitality, and the timeless joy of sweet treats made the right way.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WHY_CHOOSE_US.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-[#FBE3D9] shadow-sm hover:shadow-md hover:border-[#E07856]/40 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#FBE3D9] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    {getFeatureIcon(item.iconName)}
                  </div>
                  <h4 className="text-lg font-bold text-[#6B4226] mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-[#2E211A]/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured / Best Sellers Section */}
      <section className="py-16 md:py-20 bg-[#FBE3D9]/25 border-y border-[#FBE3D9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#E07856] block mb-1">
                Most Popular
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#6B4226]">
                Best Seller Bakes
              </h2>
              <p className="text-sm sm:text-base text-[#2E211A]/80 mt-2">
                Hand-picked favourites our customers in Mardan order again and again.
              </p>
            </div>
            <Link
              href="/menu"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#6B4226] hover:text-[#E07856] transition-colors"
            >
              <span>View All 8 Menu Items</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bestSellers.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden border border-[#FBE3D9] shadow-sm hover:shadow-lg transition-all flex flex-col"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#FBE3D9]/40">
                  <Image
                    src={product.image}
                    alt={product.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 30vw"
                    className="object-cover object-center hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-[#E07856] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow">
                    Best Seller
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-xl font-bold text-[#6B4226]">
                        {product.name}
                      </h3>
                      <span className="text-lg font-bold text-[#E07856] shrink-0">
                        {product.price}
                      </span>
                    </div>
                    <p className="text-sm text-[#2E211A]/80 leading-relaxed mb-6">
                      {product.description}
                    </p>
                  </div>

                  <a
                    href={getWhatsAppOrderUrl(product.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#6B4226] text-[#FFF8F0] font-semibold text-sm hover:bg-[#54331C] active:scale-95 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-[#E07856]"
                    id={`home-order-${product.id}`}
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Order on WhatsApp</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Cake Callout Banner */}
      <section className="py-16 bg-[#FFF8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-[#6B4226] text-[#FFF8F0] overflow-hidden p-8 sm:p-12 lg:p-16 shadow-xl">
            <div className="relative z-10 max-w-2xl space-y-4">
              <span className="px-3.5 py-1 rounded-full bg-[#E07856] text-white text-xs font-bold uppercase tracking-wider inline-block">
                Custom Orders
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
                Celebrate With A Custom Cake Made Just For You
              </h2>
              <p className="text-base text-[#FFF8F0]/85 leading-relaxed">
                Birthdays, anniversaries, graduations, or family milestones.
                Share your design inspiration, choose your favorite cake flavor,
                and we will handcraft it with love in Mardan. Starting from Rs 3,500.
              </p>
              <div className="pt-3 flex flex-col sm:flex-row gap-4">
                <a
                  href={getWhatsAppOrderUrl("Custom Birthday Cake")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#FFF8F0] text-[#6B4226] font-bold text-sm shadow hover:bg-[#FBE3D9] transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-[#6B4226]" />
                  <span>Discuss Custom Cake on WhatsApp</span>
                </a>
                <Link
                  href="/gallery"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-[#FFF8F0]/40 text-[#FFF8F0] font-semibold text-sm hover:bg-white/10 transition-all"
                >
                  <span>View Cake Gallery</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-16 bg-[#FBE3D9]/20 border-t border-[#FBE3D9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#E07856] mb-2">
              Customer Reviews
            </h2>
            <h3 className="text-3xl font-bold text-[#6B4226]">
              Loved by Families in Mardan
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl border border-[#FBE3D9] shadow-sm space-y-4"
              >
                <div className="flex gap-1 text-[#E07856]">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#E07856]" />
                  ))}
                </div>
                <p className="text-base text-[#2E211A] italic leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="pt-2 border-t border-[#FBE3D9]/60 flex items-center justify-between text-sm">
                  <span className="font-bold text-[#6B4226]">{t.author}</span>
                  <span className="text-xs text-[#2E211A]/70">{t.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Order Info Banner */}
      <section className="py-12 bg-[#FFF8F0] border-t border-[#FBE3D9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#6B4226] mb-3">
            Ready to order something sweet?
          </h2>
          <p className="text-sm sm:text-base text-[#2E211A]/80 mb-6 max-w-xl mx-auto">
            Opening Hours: {BAKERY_HOURS} • Phone: {BAKERY_PHONE_DISPLAY}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={getWhatsAppOrderUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#E07856] text-[#FFF8F0] font-semibold text-sm shadow hover:bg-[#D26442] transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Send WhatsApp Message</span>
            </a>
            <a
              href="tel:03001234567"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#6B4226] text-[#FFF8F0] font-semibold text-sm shadow hover:bg-[#54331C] transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>Call {BAKERY_PHONE_DISPLAY}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
