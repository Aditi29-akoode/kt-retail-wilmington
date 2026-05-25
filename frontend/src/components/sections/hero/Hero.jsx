"use client";

import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/Button";
import { ArrowUpRight, Phone, MapPin, Clock, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative lg:pt-[12em] pt-[10em] pb-18 overflow-hidden bg-white">
      <div className="  relative z-10">
        <div className="max-w-4xl px-4 mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tighter text-gray-900 mb-6 leading-[1.1] md:leading-[0.9]"
          >
            Yes, <br className="md:hidden" /> <span className="text-[#004A7E]">We can fix it.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-10"
          >
            <p className="text-base md:text-2xl font-bold text-gray-800 mb-2">
              Phone, Tablet, Computer & Game Console Repair - Wilmington, DE
            </p>

            <div className="flex flex-col items-center justify-center gap-2 mt-4">
              <a
                href="https://share.google/6BFO0tweMw1dTCYxQ"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm md:text-base font-semibold text-gray-800 hover:text-[#004A7E] transition-colors underline text-center block"
              >
                <MapPin className="w-4 h-4 text-black inline-block align-middle mr-1.5 -mt-0.5 shrink-0" />
                <span>Concord Mall, 4737 Concord Pike, Wilmington, DE 19803</span>
              </a>

              <div className="inline-flex items-center gap-1.5 text-sm md:text-base text-gray-600">
                <Clock className="w-4.5 h-4.5 text-gray-500 shrink-0" />
                <span className="text-green-600 font-semibold">Open Now</span>
                <span className="text-gray-400">|</span>
                <span>Closes at 10:00 PM</span>
                <ChevronDown className="w-4 h-4 text-gray-500 shrink-0" />
              </div>
            </div>

            {/* <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Get expert tech repair services - right in Wilmington, Delaware.
            </p> */}
          </motion.div>

          {/* Dual Action Pill for Mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex sm:hidden items-center justify-center py-2 px-1 bg-white border border-gray-100 rounded-full shadow-xl shadow-gray-200/50 gap-3 mx-auto"
          >
            <Button
              size="lg"
              icon={ArrowUpRight}
              iconPlacement="left"
              rotate={true}
              className="border-none"
            >
              START REPAIR
            </Button>
            <Button
              variant="outline"
              size="lg"
              icon={Phone}
              href="tel:3022959469"
            >
              302 295-9469
            </Button>
          </motion.div>

          {/* Separate Buttons for Desktop */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden sm:flex flex-wrap items-center justify-center mt-12 gap-4 mb-10"
          >
            <Button
              size="lg"
              icon={ArrowUpRight}
              iconPlacement="left"
              rotate={true}
            >
              START REPAIR
            </Button>

            <Button
              variant="outline"
              size="lg"
              icon={Phone}
              href="tel:3022959469"
            >
              302 295-9469
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="relative w-full w-full mx-auto mt-10"
        >
          <div className="relative aspect-[16/6] md:aspect-[16/5] w-full">
            <Image
              src="/images/landing-page/hero/hero.png"
              alt="Tech Devices"
              fill
              className="object-contain object-bottom"
              priority
            />
          </div>
        </motion.div>
      </div>

      {/* Subtle Background Elements */}
      {/* <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#004A7E]/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#004A7E]/5 blur-[120px] rounded-full" />
      </div> */}
    </section>
  );
}
