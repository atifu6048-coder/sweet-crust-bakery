import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BAKERY_NAME, BAKERY_CITY } from "@/lib/constants";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${BAKERY_NAME} | Fresh Homemade Cakes & Treats in ${BAKERY_CITY}`,
    template: `%s | ${BAKERY_NAME}`,
  },
  description:
    "Sweet Crust Bakery is a home bakery in Mardan, Pakistan offering delicious, fresh-baked chocolate fudge cakes, cupcakes, brownies, cookies, and custom celebration cakes. Order easily on WhatsApp.",
  keywords: [
    "Sweet Crust Bakery",
    "Bakery in Mardan",
    "Cakes in Mardan",
    "Custom Birthday Cake Mardan",
    "Cupcakes Mardan",
    "Brownies Mardan",
    "Home bakery Pakistan",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#FFF8F0] text-[#2E211A] font-sans">
        <Header />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
