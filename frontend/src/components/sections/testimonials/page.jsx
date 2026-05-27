"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function ShowDontTell() {
  const [isMobile, setIsMobile] = useState(false);
  const [width, setWidth] = useState(0);
  const carousel = useRef(null);

  const [activeIndex, setActiveIndex] = useState(1);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, [isMobile]);

  const handleDragEnd = (event, info) => {
    if (!isMobile) return;
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold && activeIndex < 2) {
      setActiveIndex(prev => prev + 1);
    } else if (info.offset.x > swipeThreshold && activeIndex > 0) {
      setActiveIndex(prev => prev - 1);
    }
  };

  return (
    <>
      <section className="bg-white md:py-0 md:pb-20 py-10 md:px-4 px-4 flex flex-col items-center text-center overflow-hidden">

        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-[44px] md:text-[48px] font-extrabold text-black"
        >
          Show,<span className="text-[#004A7E]">don’t tell.</span>
        </motion.h2>

        {/* SUBTEXT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className=" hidden md:block text-black font-semibold mt-1 max-w-3xl md:text-2xl text-[22px] leading-tight">
            Our YouTube channel is where we show the world
            <br />
            our passion & skill - right from our shop in Wilmington.
          </p>
          <p className=" md:hidden text-black font-semibold mt-1 px-2 text-[22px] leading-tight">
            Our YouTube channel is where we show the world our passion & skill of repairing electronics. See how we work below!
          </p>
        </motion.div>

        {/* CARDS CAROUSEL */}
        <motion.div
          key={isMobile ? "mobile" : "desktop"}
          className="mt-12 w-full"
          initial={isMobile ? { opacity: 0, y: 20 } : {}}
          whileInView={isMobile ? { opacity: 1, y: 0 } : {}}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            ref={carousel}
            className="flex items-center justify-center gap-6 md:gap-8 cursor-grab active:cursor-grabbing"
            drag={isMobile ? "x" : false}
            dragConstraints={isMobile ? { left: -500, right: 500 } : {
              right: width,
              left: -width,
            }}
            onDragEnd={handleDragEnd}
            animate={isMobile ? { x: (1 - activeIndex) * 304 } : { x: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            whileTap={{ cursor: "grabbing" }}
          >
            {/* LEFT */}
            <motion.div
              className={`flex-shrink-0 bg-black rounded-[10px] flex items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.1)] ${isMobile ? "w-[280px] h-[410px]" : "w-[280px] h-[410px]"}`}
              initial={isMobile ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.7 }}
              whileInView={!isMobile ? { opacity: 1, scale: 1 } : undefined}
              animate={isMobile ? {
                scale: activeIndex === 0 ? 1.05 : 0.9,
                opacity: activeIndex === 0 ? 1 : 0.5,
              } : {}}
              viewport={{ once: true, amount: 0.3 }}
              transition={!isMobile ? { duration: 0.6, delay: 0.1, ease: "easeOut" } : { duration: 0.4 }}
            >
              <Image
                src="/images/landing-page/testimonial/youtube.png"
                alt="yt"
                width={isMobile ? (activeIndex === 0 ? 110 : 88) : 88}
                height={isMobile ? (activeIndex === 0 ? 110 : 88) : 88}
                className="object-contain"
              />
            </motion.div>

            {/* CENTER (BIGGER) */}
            <motion.div
              className={`flex-shrink-0 bg-black rounded-[10px] flex items-center justify-center shadow-[0_25px_60px_rgba(0,0,0,0.1)] ${isMobile ? "w-[280px] h-[410px]" : "w-[290px] h-[460px]"}`}
              initial={isMobile ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.7 }}
              whileInView={!isMobile ? { opacity: 1, scale: 1 } : undefined}
              animate={isMobile ? {
                scale: activeIndex === 1 ? 1.05 : 0.9,
                opacity: activeIndex === 1 ? 1 : 0.5,
              } : {}}
              viewport={{ once: true, amount: 0.3 }}
              transition={!isMobile ? { duration: 0.6, delay: 0.25, ease: "easeOut" } : { duration: 0.4 }}
            >
              <Image
                src="/images/landing-page/testimonial/youtube.png"
                alt="yt"
                width={isMobile ? (activeIndex === 1 ? 110 : 88) : 110}
                height={isMobile ? (activeIndex === 1 ? 110 : 88) : 110}
                className="object-contain"
              />
            </motion.div>

            {/* RIGHT */}
            <motion.div
              className={`flex-shrink-0 bg-black rounded-[10px] flex items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.1)] ${isMobile ? "w-[280px] h-[410px]" : "w-[280px] h-[410px]"}`}
              initial={isMobile ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.7 }}
              whileInView={!isMobile ? { opacity: 1, scale: 1 } : undefined}
              animate={isMobile ? {
                scale: activeIndex === 2 ? 1.05 : 0.9,
                opacity: activeIndex === 2 ? 1 : 0.5,
              } : {}}
              viewport={{ once: true, amount: 0.3 }}
              transition={!isMobile ? { duration: 0.6, delay: 0.4, ease: "easeOut" } : { duration: 0.4 }}
            >
              <Image
                src="/images/landing-page/testimonial/youtube.png"
                alt="yt"
                width={isMobile ? (activeIndex === 2 ? 110 : 88) : 88}
                height={isMobile ? (activeIndex === 2 ? 110 : 88) : 88}
                className="object-contain"
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* BUTTON */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-18 cursor-pointer flex items-center gap-3 border-[4px] group border-red-600 pl-3 pr-8 py-2.5 rounded-full text-black font-black text-[26px] hover:bg-gray-200"
        >
          <div className="w-10 h-10 rounded-full border border-gray-200 bg-[#F9F9F9] flex items-center justify-center transition-all duration-300 group-hover:rotate-45">
            <ArrowUpRight className="w-5 h-5 stroke-[1px]" />
          </div>
          Visit our Channel
        </motion.button>



      </section>
      {/* <GradientCTA
        title="Start a repair today"
        subtitle="Simply tell us about your device to get started"
        buttonText="START REPAIR"
        href="/repair-made-easy"
      /> */}
    </>
  );
}