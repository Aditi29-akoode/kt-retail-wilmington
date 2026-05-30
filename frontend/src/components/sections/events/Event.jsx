"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Event = () => {
  return (
    <section className="md:py-0 py-1 px-4 md:px-8 bg-white overflow-hidden" id="events">
      <div className="max-w-[1600px] mx-auto">
        {/* Header Section */}
        <div className="text-center lg:mb-16 mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-black text-black mb-6 tracking-tight"
          >
            Events
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-1 text-gray-700"
          >
            <p className="text-xl md:text-2xl font-medium">
              {"We love our community - this is our bulletin for what we're doing this month!"}
            </p>
            <p className="text-xl md:text-2xl font-medium">
              All are welcome, new events posted monthly.
            </p>
          </motion.div>
        </div>

        {/* Main Event Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-[1380px] mx-auto"
        >
          <div className="bg-[#1A1A1A] rounded-[2.5rem] md:rounded-[1.5rem] overflow-hidden flex flex-col lg:flex-row items-stretch shadow-[0_32px_64px_-16px_rgba(0,0,0,0.4)] relative border border-white/5">
            {/* Left Content Area */}
            <div className="flex-1 p-6 min-[730px]:p-8 lg:p-0 lg:pl-10 lg:py-10 xl:pl-20 xl:py-20 flex flex-col justify-center">
              <span className="text-[#C1C1C1] text-xl md:text-3xl font-medium mb-4 md:mb-6 block">
                AI Workshop & Training
              </span>

              <h3 className="text-white text-2xl md:text-4xl lg:text-[2.3rem] font-semibold leading-[1.1] mb-6 md:mb-8 tracking-tight">
                Learn how to use the newest AI tools to make every day tasks easier:
              </h3>

              <p className="text-[#A6A6A6] text-base md:text-[21px] font-bold mb-6 md:mb-8 leading-relaxed max-w-full">
                This will be a 1-hour walkthrough of how to use AI platforms like ChatGPT, Gemini & Claude to “Fix the World.”
              </p>

              <div className="space-y-1 mb-4 md:mb-12 text-base md:text-xl text-[#A1A1A1]">
                <p><strong>When: Saturday, May 18, 9:00 AM</strong></p>
                <p><strong>Where: KhemTech Wilmington</strong></p>
              </div>

              <div className="mb-4 md:mb-10 text-base md:text-xl text-[#A1A1A1]">
                <p><strong>Cost: Free</strong></p>
              </div>

              <div>
                <Link
                  href="#"
                  className="text-[#008AFF] text-2xl md:text-3xl font-bold hover:text-blue-400 transition-colors"
                >
                  Reserve Your Seat
                </Link>
              </div>
            </div>

            {/* Right Image Area */}
            <div className="flex-1 relative min-h-[400px] lg:min-h-[620px] overflow-hidden">
              <Image
                src="/images/landing-page/events/event.png"
                alt="AI Workshop participants"
                fill
                className="object-cover"
                priority
              />

              {/* Decorative Blue Arc in top right */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-t-8 border-r-8 border-[#007AFF] rounded-tr-[3rem] opacity-80" />
            </div>
          </div>
        </motion.div>

        {/* Direction Shortcuts */}
        <div className="mt-20 flex flex-col items-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-900 font-bold mb-10 text-lg"
          >
            Get Directions:
          </motion.span>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-2 md:gap-6"
          >
            <DirectionButton
              icon="/images/landing-page/events/google-map-icon.jpg"
              label="Maps"
              href="https://www.google.com/maps/place/KhemTech+-+Phone,+Tablet,+Computer,+Game+Console+Repair+%26+Accessories+(Concord+Mall)/@39.8235228,-75.5440403,19z/data=!3m1!5s0x89c6fb46c78f6021:0x10f0d828ef272e2f!4m14!1m7!3m6!1s0x89c6fbe2cd9bb5cd:0x1410cb2ec7ed9c3e!2sKhemTech+-+Phone,+Tablet,+Computer,+Game+Console+Repair+%26+Accessories+(Concord+Mall)!8m2!3d39.8234054!4d-75.5440242!16s%2Fg%2F11xfvvdh1s!3m5!1s0x89c6fbe2cd9bb5cd:0x1410cb2ec7ed9c3e!8m2!3d39.8234054!4d-75.5440242!16s%2Fg%2F11xfvvdh1s?entry=ttu&g_ep=EgoyMDI2MDUyNy4wIKXMDSoASAFQAw%3D%3D"
            />
            <DirectionButton
              icon="/images/landing-page/events/apple-Logo.png"
              label="Maps"
              href="#"
            />
            <DirectionButton
              icon="/images/landing-page/events/waze.png"
              label="waze"
              href="#"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const DirectionButton = ({ icon, label, href }) => (
  <Link
    href={href}
    className="flex items-center gap-1.5 md:gap-3 px-3 md:px-6 py-2 bg-white border-[1px] border-gray-900 rounded-2xl hover:bg-gray-50 transition-all duration-300 group whitespace-nowrap"
  >
    <div className="w-5 h-5 md:w-8 md:h-8 relative flex items-center justify-center">
      <Image
        src={icon}
        alt={label}
        width={32}
        height={32}
        className="object-contain"
      />
    </div>
    <span className="font-bold text-gray-900 text-base md:text-2xl">{label}</span>
  </Link>
);

export default Event;
