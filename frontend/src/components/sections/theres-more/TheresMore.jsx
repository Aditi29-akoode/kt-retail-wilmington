"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1,
            duration: 0.6,
            ease: "easeOut",
        },
    }),
};

export default function TheresMore() {
    return (
        <section className="w-full bg-white py-16 md:py-24 overflow-hidden font-sans">
            <div className=" mx-auto  flex flex-col items-center">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center md:max-w-[80%] max-w-[90%] mb-12 md:mb-16"
                >
                    <h2 className="text-5xl md:text-7xl font-black text-black text-gray-900 tracking-tight mb-6">
                        there&apos;s <span className="text-[#004A7E] text-5xl md:text-[5rem] uppercase">MORE</span><span className="text-5xl md:text-[5rem] text-black font-black">!?</span>
                    </h2>
                    <p className="text-xl md:text-3xl font-medium font-inter text-gray-800 tracking-tight  leading-relaxed">
                        Besides repairs, we sell quality-tested cases, screen protectors, chargers & More!
                    </p>
                </motion.div>

                {/* Grid */}
                <div className="max-w-5xl px-6 grid  grid-cols-12 gap-5 w-[88%]">
                    {/* CARD 1: Screen Protectors */}
                    <motion.div
                        custom={0}
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        className="col-span-12 min-[720px]:col-span-6 min-[1000px]:col-span-3 min-[720px]:order-1 min-[1000px]:order-1 bg-[#EAEAEA] rounded-[14px] overflow-hidden flex flex-col justify-between items-center pt-10 min-h-[230px] md:h-[300px] border border-transparent hover:shadow-lg transition-all duration-300 group cursor-pointer"
                    >
                        <div className="text-center font-inter px-2">
                            <h3 className="font-semibold tracking-tight text-xl md:text-xl text-gray-900 leading-tight">
                                Screen Protectors
                            </h3>
                            <p className="text-xs md:text-base tracking-tight font-medium text-gray-700">
                                Privacy & Clear
                            </p>
                        </div>
                        <div className="relative w-full h-[240px] mt-auto">
                            <Image
                                src="/images/landing-page/theres-more/first-card.png"
                                alt="Screen Protectors"
                                fill
                                className="object-contain object-bottom transition-transform duration-500 group-hover:scale-105"
                                unoptimized
                            />
                        </div>
                    </motion.div>

                    {/* CARD 2: New & Used Unlocked Devices */}
                    <motion.div
                        custom={1}
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        className="relative col-span-12 min-[720px]:col-span-12 min-[1000px]:col-span-6 min-[720px]:order-3 min-[1000px]:order-2 bg-[#EAEAEA] rounded-[18px] overflow-hidden min-h-[230px] md:h-[300px] border border-transparent hover:shadow-lg transition-all duration-300 group cursor-pointer"
                    >
                        {/* Background Image: second-card.png scaled to hide outer white corners */}
                        <div className="absolute inset-0 w-full h-full overflow-hidden">
                            <Image
                                src="/images/landing-page/theres-more/second-card.png"
                                alt="New & Used Unlocked Devices"
                                fill
                                className="object-cover object-left scale-[1.02] transition-transform duration-500 group-hover:scale-[1.04]"
                                unoptimized
                            />
                        </div>

                        {/* Interactive Overlay to guarantee separation of Image and Text */}
                        <div className="absolute inset-0 flex flex-row items-center z-10 w-full h-full">
                            {/* Left: Spacer to let the iPhone box in the background image show through */}
                            <div className="w-[45%] h-full" />

                            {/* Right: Centered Text content */}
                            <div className="w-[55%] h-full flex flex-col items-center justify-center text-center px-4 md:px-2 ">
                                <h3 className="font-bold tracking-tight text-xl sm:text-2xl md:text-3xl lg:text-[28px] text-gray-900 leading-[1.15] -mr-3 font-sans">
                                    New & Used<br />Unlocked Devices
                                </h3>
                                <p className="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-gray-700 mt-2 md:mt-3 leading-snug font-sans">
                                    Tested with 60-day warranty
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* CARD 3: Cables & Adapters */}
                    <motion.div
                        custom={2}
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        className="col-span-12 min-[720px]:col-span-6 min-[1000px]:col-span-3 min-[720px]:order-4 min-[1000px]:order-3 bg-[#EAEAEA] rounded-[14px] overflow-hidden flex flex-col justify-between items-center lg:pt-10 pt-6 min-h-[240px] md:h-[300px] border border-transparent hover:shadow-lg transition-all duration-300 group cursor-pointer"
                    >
                        <div className="text-center px-4">
                            <h3 className="font-semibold tracking-tight text-xl md:text-xl text-gray-900 leading-tight">
                                Cables & Adapters
                            </h3>
                        </div>
                        <div className="relative w-full lg:h-[200px] md:h-[210px] h-[150px] mt-auto">
                            <Image
                                src="/images/landing-page/theres-more/third-card.png"
                                alt="Cables & Adapters"
                                fill
                                className="object-contain object-bottom transition-transform duration-500 group-hover:scale-105"
                                unoptimized
                            />
                        </div>
                    </motion.div>

                    {/* CARD 4: Power Banks */}
                    <motion.div
                        custom={3}
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        className="col-span-12 min-[720px]:col-span-6 min-[1000px]:col-span-3 min-[720px]:order-5 min-[1000px]:order-4 bg-[#EAEAEA] rounded-[14px] overflow-hidden flex flex-col justify-between items-center lg:pt-10 pt-6 min-h-[240px] min-[720px]:h-[300px] min-[1000px]:h-[280px] border border-transparent hover:shadow-lg transition-all duration-300 group cursor-pointer"
                    >
                        <div className="text-center px-4">
                            <h3 className="font-semibold tracking-tight text-xl md:text-xl text-gray-900 leading-tight">
                                Power Banks
                            </h3>
                        </div>
                        <div className="relative w-[105%] lg:h-[230px] md:h-[220px] h-[190px] mt-auto">
                            <Image
                                src="/images/landing-page/theres-more/fourth-card.png"
                                alt="Power Banks"
                                fill
                                className="object-contain object-bottom transition-transform duration-500 group-hover:scale-105"
                                unoptimized
                            />
                        </div>
                    </motion.div>

                    {/* CARD 5: Kids Cars */}
                    <motion.div
                        custom={4}
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        className="col-span-12 min-[720px]:col-span-12 min-[1000px]:col-span-6 min-[720px]:order-6 min-[1000px]:order-5 bg-[#EAEAEA] rounded-[14px] overflow-hidden min-h-[230px] md:h-[280px] border pt-6 min-[720px]:pt-0 border-transparent hover:shadow-lg transition-all duration-300 group cursor-pointer"
                    >
                        <div className="flex flex-col min-[720px]:flex-row items-center h-full ">
                            {/* Left Image (Desktop) */}
                            <div className="relative w-[30%] h-[240px] hidden min-[720px]:block">
                                <Image
                                    src="/images/landing-page/theres-more/fifth-second-card.png"
                                    alt="Kids Cars Orange"
                                    fill
                                    className="object-contain object-bottom transition-transform duration-500 group-hover:scale-105"
                                    unoptimized
                                />
                            </div>

                            {/* Middle Text */}
                            <div className="w-full min-[720px]:w-[40%] flex flex-col items-center justify-center text-center z-10 px-2">
                                <h3 className="font-extrabold text-2xl md:text-3xl text-gray-900 leading-tight">
                                    Kids Cars
                                </h3>
                                <p className="text-base font-semibold text-gray-500 mt-2">
                                    For ages 1-6,<br />fully assembled
                                </p>
                            </div>

                            {/* Right Image (Desktop) */}
                            <div className="relative w-[30%] h-[240px] hidden min-[720px]:block">
                                <Image
                                    src="/images/landing-page/theres-more/fifth-first-card.png"
                                    alt="Kids Cars Blue"
                                    fill
                                    className="object-contain object-bottom transition-transform duration-500 group-hover:scale-105"
                                    unoptimized
                                />
                            </div>

                            {/* Mobile Cars Layout */}
                            <div className="flex flex-row -gap-28 w-full justify-center min-[720px]:hidden mt-4">
                                <div className="relative w-[45%] h-[140px]">
                                    <Image
                                        src="/images/landing-page/theres-more/fifth-first-card.png"
                                        alt="Kids Cars Orange"
                                        fill
                                        className="object-contain transition-transform duration-500 group-hover:scale-105"
                                        unoptimized
                                    />
                                </div>
                                <div className="relative w-[45%] h-[140px]">
                                    <Image
                                        src="/images/landing-page/theres-more/fifth-second-card.png"
                                        alt="Kids Cars Blue"
                                        fill
                                        className="object-contain transition-transform duration-500 group-hover:scale-105"
                                        unoptimized
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* CARD 6: Otterbox Cases */}
                    <motion.div
                        custom={5}
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        className="col-span-12 min-[720px]:col-span-6 min-[1000px]:col-span-3 min-[720px]:order-2 min-[1000px]:order-6 bg-[#EAEAEA] rounded-[14px] overflow-hidden flex flex-col justify-between items-center pt-6 min-h-[240px] min-[720px]:h-[300px] min-[1000px]:h-[280px] border border-transparent hover:shadow-lg transition-all duration-300 group cursor-pointer"
                    >
                        <div className="text-center px-4">
                            <h3 className="font-semibold tracking-tight text-xl md:text-xl text-gray-900 leading-tight">
                                Otterbox Cases
                            </h3>
                        </div>
                        <div className="relative w-[95%] lg:h-[280px] md:h-[205px] h-[180px] mt-auto">
                            <Image
                                src="/images/landing-page/theres-more/sixth-card.png"
                                alt="Otterbox Cases"
                                fill
                                className="object-contain object-bottom transition-transform duration-500 group-hover:scale-105"
                                unoptimized
                            />
                        </div>
                    </motion.div>
                </div>

                {/* Footer Link */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="mt-12 md:mt-16 text-center"
                >
                    <p className="text-2xl md:text-3xl font-medium text-gray-900 tracking-tight">
                        <Link href="#visit" className="text-[#004A7E] hover:underline transition-all">
                            Visit us
                        </Link>{" "}
                        to see our selection in person!
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
