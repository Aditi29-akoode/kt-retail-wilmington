"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowUpRight } from "lucide-react";

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

export default function WhyUs() {
    return (
        <section className="w-full bg-[#0B0F14] text-white overflow-hidden">
            {/* BLACK SECTION */}
            <div className="max-w-5xl mx-auto px-0 py-12 md:py-18 flex flex-col items-center text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-gray-200 font-medium text-xl tracking-widest"
                    >
                        Why us?
                    </motion.span>
                    <h2 className="text-4xl md:text-6xl text-white font-black my-6 tracking-tight">
                        Redefining Repair.
                    </h2>
                    <p className="text-xl md:text-3xl font-medium font-inter text-white mb-6">
                        We're setting a new standard in the repair industry.
                    </p>
                    <p className="text-white text-lg md:text-3xl mb-12 font-light max-w-9xl leading-relaxed">
                        We take service and quality seriously - our technicians and customer service team are part of a movement:
                    </p>
                </motion.div>

                {/* TRUST GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 max-w-5xl  px-4 md:px-0">
                    {/* ROW 1 */}
                    <motion.div
                        custom={0}
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        className="lg:col-span-6 bg-[#212121] rounded-[12px] p-0 md:p-10  flex flex-col items-center justify-center min-h-[160px] border border-white/5"
                    >
                        <h3 className="text-3xl md:text-4xl font-inter uppercase text-white font-bold">“No FIX, No Charge”</h3>
                        <p className="text-white mt-2 md:mt-0 text-xl">on all in-person repairs</p>
                    </motion.div>

                    <motion.div
                        custom={1}
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        className="lg:col-span-6 bg-[#212121] rounded-[12px] p-6 md:p-10 flex flex-col items-center justify-center min-h-[160px] border border-white/5"
                    >
                        <h3 className="text-3xl md:text-5xl font-inter text-white font-bold">On-Site</h3>
                        <p className="text-white mt-2 md:mt-0 text-xl">Repairs & Data-Recovery Lab</p>
                    </motion.div>

                    {/* ROW 2 */}
                    <motion.div
                        custom={2}
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        className="lg:col-span-4 bg-[#212121] rounded-[12px] p-8 flex flex-col items-center justify-center md:min-h-[240px] min-h-[160px] relative overflow-hidden border border-white/5"
                    >
                        <Image
                            src="/images/landing-page/why-us/footer2.png"
                            alt="confetti"
                            fill
                            className="object-cover z-10"
                        />
                        <div className="relative text-center">
                            <h3 className="text-3xl font-bold text-white">Established</h3>
                            <p className="text-7xl font-bold mt-1 tracking-tighter">2024</p>
                        </div>
                    </motion.div>

                    <motion.div
                        custom={3}
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        className="lg:col-span-4 bg-[#212121] rounded-[12px] p-6 flex flex-col items-center justify-center md:min-h-[240px] min-h-[160px] border border-white/5"
                    >
                        <div className="relative w-full h-40">
                            <Image
                                src="/images/landing-page/why-us/footer5.png"
                                fill
                                alt="Fix The World"
                                className="object-contain"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        custom={4}
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        className="lg:col-span-4 bg-[#212121] rounded-[12px] p-8 flex flex-col items-center justify-center md:min-h-[240px] min-h-[160px] border border-white/5"
                    >
                        <h3 className="text-6xl font-bold text-white tracking-tighter">500+</h3>
                        <p className="text-white mt-0 font-semibold text-3xl">Positive Reviews</p>
                        <div className="relative w-40 h-8 mt-0">
                            <Image
                                src="/images/landing-page/why-us/footer3.png"
                                fill
                                alt="stars"
                                className="object-contain"
                            />
                        </div>
                    </motion.div>

                    {/* ROW 3 */}
                    <motion.div
                        custom={5}
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        className="lg:col-span-6 bg-[#212121] rounded-[12px] px-10 py-8 flex items-center justify-between min-h-[160px] border border-white/5"
                    >
                        <div className="flex flex-col items-start">
                            <h3 className="text-6xl font-bold tracking-tight text-white">30k+</h3>
                            <p className="text-white mt-0 text-3xl">Customers Served</p>
                        </div>
                        <div className="relative w-[100px] h-[100px] flex-shrink-0">
                            <Image
                                src="/images/landing-page/why-us/footer1.png"
                                alt="status"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        custom={6}
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        className="lg:col-span-6 bg-[#212121] rounded-[12px] px-8 py-6 flex items-center justify-between min-h-[140px] border border-white/5"
                    >
                        <div className="relative w-[100px] h-[100px] flex-shrink-0">
                            <Image
                                src="/images/landing-page/why-us/footer4.png"
                                alt="screwdriver"
                                fill
                                sizes="100px"
                                className="object-contain opacity-90"
                            />
                        </div>
                        <div className="text-right">
                            <h3 className="text-6xl font-bold tracking-tight text-white">20+</h3>
                            <p className="text-white mt-1 text-3xl">Years fixing devices</p>
                        </div>
                    </motion.div>
                </div>

                {/* CTA BUTTON */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    className="flex items-center gap-4 md:gap-8 mt-8 md:mt-16 relative"
                >
                    <Link href="/">
                        <Button
                            variant="outline"
                            size="lg"
                            rotate={true}
                            icon={ArrowUpRight}
                            iconClassName="w-6 h-6 md:w-7 md:h-7"
                            iconWrapperClassName="w-10 h-10 md:w-12 md:h-12"
                            className="h-16 pr-4 md:pr-12 font-inter text-xl md:text-3xl font-medium shadow-sm"
                        >
                            Start Repair
                        </Button>
                    </Link>
                </motion.div>
            </div>


        </section>
    );
}
