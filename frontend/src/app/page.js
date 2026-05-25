import Navbar from "@/components/layout/Navbar";
import Image from "next/image";
import Hero from "@/components/sections/hero/Hero";
import Strip from "@/components/sections/strip/Strip";
import UtilityStrip from "@/components/layout/UtilityStrip";
import Service from "@/components/sections/services/Service";
import About from "@/components/sections/about-us/About";
import Visit from "@/components/sections/visit-us/Visit";
import Testimonials from "@/components/sections/testimonials/page";
import WhyUs from "@/components/sections/why-us/why";
import TheresMore from "@/components/sections/theres-more/TheresMore";
import Faq from "@/components/ui/Faq";
import GradientCTA from "@/components/ui/GradientCta";
import Event from "@/components/sections/events/Event";
import Trust from "@/components/sections/testimonials/Trust";
import KhemtechRepair from "@/components/sections/khemtech-repair/KhemtechRepair";
import BusinessDetails from "@/components/sections/business-details/BusinessDetails";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-x-hidden relative">
      <UtilityStrip />
      <Navbar />
      <Hero />
      <Strip />
      <Service />
      <About />
      <Visit />
      <Testimonials />
      <WhyUs />
      <TheresMore />
      <Faq />
      <Trust />
      <KhemtechRepair />
      <BusinessDetails />
      {/* <Event /> */}

      {/* Right Background Glow */}
      <div className="relative w-full flex justify-end pointer-events-none">
        <div className="absolute right-0 -top-[200px] md:-top-[400px] z-0 hidden min[1024px]:block">
          <Image
            src="/images/spot-right.png"
            alt="glow"
            width={300}
            height={300}
            className="object-contain"
            unoptimized
          />
        </div>
      </div>

      <GradientCTA
        title="Start a repair today"
        subtitle="We’ll get back to you within 24 hours, or come into our store
for same-day service."
        buttonText="START REPAIR"
        href="/"
        className="mx-auto px-[10%]"
      />

      <Footer />
    </main>
  );
}