"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const About = () => {
    return (
        <section className="py-12 px-4 md:px-6 bg-white">
            <div className="max-w-8xl  mx-auto">
                <div className="relative overflow-hidden rounded-[2.5rem] md:rounded-[3rem] bg-[linear-gradient(to_top,#EDF5FF_0%,#F7F7F7_100%)] pt-16 md:pt-24 flex flex-col">

                    {/* Content Container */}
                    <div className="flex flex-col items-center text-center max-w-4xl mx-auto relative z-10">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-gray-500 font-medium text-sm tracking-widest uppercase mb-4"
                        >
                            About Us
                        </motion.span>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className=" font-inter text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight"
                        >
                            hi, we're <span className="font-inter text-[#004A7E]">KhemTech</span>,
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-gray-600 text-2xl md:text-3xl leading-snug font-bold px-4 md:px-0 text-gray-900 md:mb-12 mb-6 max-w-xl md:max-w-2xl font-inter"
                        >
                            A passionate group of master technicians in New Jersey trying to "Fix the World" & share our love of repair.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="relative mb-8"
                        >
                            <h3 className="text-xl md:text-3xl font-bold text-gray-900 inline-block relative">
                                We fix what others can't.
                                <div className="absolute w-full h-5">
                                    <Image
                                        src="/images/arrows.png"
                                        alt="underline"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </h3>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="text-gray-500 text-lg md:text-xl font-semibold mb-6"
                        >
                            Visit us to get your device fixed - often same day!
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="mb-0 md:mb-8"
                        >
                            <Button
                                variant="outline"
                                size="lg"
                                icon={ArrowUpRight}
                                iconPlacement="left"
                                rotate={true}
                                className="border-gray-400 text-gray-900 hover:bg-gray-50 shadow-sm"
                            >
                                Our Story
                            </Button>
                        </motion.div>
                    </div>

                    {/* Image at bottom */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative w-full max-w-5xl mx-auto h-[250px] md:h-[480px]"
                    >
                        <Image
                            src="/images/landing-page/about-us/groups.png"
                            alt="KhemTech Team"
                            fill
                            className="object-contain object-bottom"
                            priority
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;

