"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, PhoneCall, ChevronRight } from "lucide-react";
import Link from "next/link";

const BUSINESS_CATEGORIES = [
  "Phone Repair Service",
  "Data recovery service",
  "Screen repair service",
  "Computer repair service",
  "Electronics repair shop",
  "Mobile phone repair shop",
  "Cell phone accessory store",
];

const STORE_LOCATIONS = [
  {
    id: 1,
    city: "Deptford, NJ",
    address: "1406 Clements Bridge Rd, #1, Deptford NJ",
    phone: "(862) 343-7979",
    phoneHref: "tel:8623437979",
    mapHref: "https://maps.google.com/?q=1406+Clements+Bridge+Rd+%231,+Deptford,+NJ+08096",
  },
  {
    id: 2,
    city: "Pennsauken, NJ",
    address: "3495 Haddonfield Rd Store #3, Pennsauken, NJ 08109",
    phone: "(856) 588-7569",
    phoneHref: "tel:8565887569",
    mapHref: "https://share.google/8JiFHBK19TotIwcOQ",
  },
  {
    id: 3,
    city: "Wilmington, DE",
    address: "Concord Mall, 4737 Concord Pike, Wilmington, DE 19803",
    phone: "(302) 295-9469",
    phoneHref: "tel:3022959469",
    mapHref: "https://share.google/6BFO0tweMw1dTCYxQ",
  },
];


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function BusinessDetails() {
  return (
    <section className="w-full bg-white pt-16 md:pt-24 pb-16 md:pb-12 font-sans text-black border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= BUSINESS CATEGORIES ================= */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-[32px] md:text-[44px] font-extrabold tracking-tight mb-1 text-gray-900"
          >
            Business Categories
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-gray-800 text-lg  font-medium mb-6 md:mb-12 md:max-w-[70%] max-w-full mx-auto"
          >
            These are the categories KhemTech Repair is listed and known for on Google:
          </motion.p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="flex flex-wrap items-center justify-center gap-4 md:max-w-[80%] max-w-full mx-auto"
          >
            {BUSINESS_CATEGORIES.map((category) => (
              <motion.div
                key={category}
                variants={itemVariants}
                className="group flex items-center gap-2 px-5 md:py-3 py-2 transition-all duration-300 cursor-pointer"
              >
                <span className="text-base md:text-lg font-semibold text-gray-800 group-hover:text-[#004A7E] transition-colors">
                  {category}
                </span>
                <ChevronRight className="md:w-6 w-4 h-6 h-4 text-[#00AEFF] stroke-[5] group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ================= TYPOGRAPHY & SEO SECTION ================= */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 gap-16 md:gap-20 border-t border-gray-200/60 pt-16 mb-24">

          {/* Section 1: KhemTech Repair in Wilmington, DE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
              KhemTech Repair in <span className="text-[#004A7E] font-bold">Wilmington, DE</span>
            </h3>
            <div className="space-y-0 text-gray-700 text-lg md:text-xl font-medium leading-relaxed">
              <p>
                At KhemTech Repair in Wilmington, we believe no one should have to put up with a broken device. In today's day and age, being connected is everything. Whether you rely on your tech for business or entertainment, don't deal with a broken phone, tablet, or any other electronic for another minute. Let our master technicians get you back up and running. Whether it's a simple iPhone screen repair or a complex component-level board fix, our pros are here to help.
              </p>
              <br />
              KhemTech is proud to serve tech users in Wilmington, Brandywine Hundred, and the surrounding Delaware areas. We're conveniently located inside the Concord Mall on Concord Pike. You can make an appointment online, give us a call, or simply swing by to take advantage of our walk-in mall hours.

            </div>
          </motion.div>

          {/* Section 2: iPhone, Computer, Game Console and Electronics Repair */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
              iPhone, Computer, Game Console and Electronics Repair
            </h3>
            <div className="text-gray-700 text-lg md:text-xl font-medium leading-relaxed">
              <p>
                KhemTech Repair in Wilmington is your premier destination for all of your phone and high-end electronics repair needs. Our master technicians are expertly trained across a massive array of electronics and specialized devices—whether you need a screen replacement on a flagship smartphone or intricate component-level work on a MacBook, we are on it.
              </p>
              <br />
              Our specialists prioritize top-tier, premium quality parts for every fix, ensuring your device meets or exceeds its original factory specifications. To give you total peace of mind, all of our repair services come backed by a comprehensive 1-year warranty. What truly sets KhemTech apart from standard, corporate repair shops is our deep, specialized expertise in advanced diagnostics and precise microsoldering. This means that instead of just swapping parts, our team possesses the elite technical knowledge and tooling required to troubleshoot and salvage complex board-level issues that other shops turn away. Located inside the Concord Mall on Concord Pike, we deliver the highest standard of repair service to tech users throughout Wilmington and the surrounding Delaware areas.
            </div>
          </motion.div>

          {/* Section 3: Price Match Guarantee */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-6"
          >
            <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
              Price Match <span className="text-[#004A7E] font-bold">Garantee.</span>
            </h3>
            <div className="text-gray-700 text-lg md:text-xl font-medium leading-relaxed">
              <p>
                You wouldn't drive a damaged car, so why struggle with a broken smartphone, laptop, or gaming console? With retail prices for modern electronics skyrocketing, investing in a professional repair is the smartest, most cost-effective way to extend the lifespan of your essential tech. At KhemTech Repair inside the Concord Mall in Wilmington, DE, we take the stress out of device failures by providing transparent, tier-one service without the corporate markup.
              </p>
              <br />
              Many local repair shops cut corners by installing cheap, third-party aftermarket parts that fail within weeks, all while charging premium rates. We do things differently. KhemTech invests heavily in factory-grade components, precise diagnostic machinery, and master-level technicians who specialize in intricate, component-level board repairs. When you choose our Concord Mall location for your cell phone or electronics repair, you aren't just getting a quick fix—you're getting the elite technical expertise, lasting reliability, and unmatched craftsmanship your high-end devices deserve.
            </div>
          </motion.div>

          {/* Section 4: Same-Day iPhone Repairs and More & Customer Reviews */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            <div className="space-y-1">
              <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6 text-gray-900">
                Same-Day iPhone Repairs and More.
              </h3>
              <p className="text-gray-700 text-lg md:text-xl font-medium leading-relaxed">
                By choosing KhemTech Repair in Wilmington, DE, you can rest assured that you and your high-end devices are receiving top-of-the-line service. Don't just take it from us. Here's what some of our regional customers have to say about their experience:
              </p>
              <br />
              <p className="text-gray-700 text-lg md:text-xl font-medium leading-relaxed">
                "The team at KhemTech was absolutely outstanding. They ensured that the phone would be taken care of as soon as possible and took great care of it. If you need any type of complex electronic repaired, they are definitely the guys to go to." - F.O
              </p>
              <br />
              <p className="text-gray-700 text-lg md:text-xl font-medium leading-relaxed">
                "When it looked as though I was going to have to spend over $1,000 on a brand new phone because I didn't think my device could ever be fixed, this place came through and did an amazing job. My phone works better and looks cleaner than it ever did. Kudos to KhemTech. If I ever have another issue or if I know anyone who does, I will be sending them straight to you." - N.W.
              </p>
              <br />
              <p className="text-gray-700 text-lg md:text-xl font-medium leading-relaxed">
                "Thank you to the tech team for a wonderful experience. I brought my sister's iPhone here and they were able to repair it without a problem. The screen looks brand new again, and it cost a fraction of what Apple was going to charge me." - D.S.
              </p>
            </div>



            <p className="text-gray-700 text-lg md:text-xl font-medium leading-relaxed pt-2">
              Bring your device to KhemTech Repair inside the Concord Mall today for a comprehensive, on-the-spot physical diagnostic. Let our master technicians explain exactly what is going on with your device and map out the most reliable path to a full recovery. We pride ourselves on getting your smartphone, tablet, computer, or specialized electronics back in your hands with minimal downtime. Our experts are passionate about technical repair and want to get you back to work, streaming, gaming, and connecting to the things you love. Visit our Wilmington location on Concord Pike today to see how we can bring your tech back to life.
            </p>
          </motion.div>

          {/* Section 5: Directions to KhemTech Repair Pennsauken */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            <div className="space-y-1">
              <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6 text-gray-900">
                Directions to KhemTech Repair Pennsauken
              </h3>
              <p className="text-gray-700 text-lg md:text-xl font-medium leading-relaxed">
                We are located inside the Concord Mall on Concord Pike (Route 202) in Wilmington, Delaware, offering easy indoor access and plenty of parking.
              </p>
              <br />
              <p className="text-gray-700 text-lg md:text-xl font-medium leading-relaxed">
                <strong>From the South / Downtown Wilmington:</strong> Head north on Concord Pike (Route 202) toward the Pennsylvania border. Pass the intersection for Silverside Road and continue straight for about two miles. The Concord Mall will be on your left. Turn left into the main mall entrance near the front marquee sign to find parking close to the central retail corridors.
              </p>
              <br />
              <p className="text-gray-700 text-lg md:text-xl font-medium leading-relaxed">
                <strong>From the North / Pennsylvania Line:</strong> Head south on Wilmington-West Chester Pike (Route 202) crossing over the Delaware state line. Continue past the Naamans Road intersection, and the Concord Mall will be immediately on your right. Turn right into the perimeter lot for convenient mall access.
              </p>
            </div>
          </motion.div>

        </div>

        {/* ================= THE STORES GRID ================= */}
        <div className="pt-4">
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-[32px] md:text-[40px] font-bold tracking-tight text-gray-900"
            >
              The KhemTech Repair stores
            </motion.h2>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 min-[1000px]:grid-cols-3 gap-8 max-w-[90%] mx-auto"
          >
            {STORE_LOCATIONS.map((store) => (
              <motion.div
                key={store.id}
                variants={itemVariants}
                className="bg-[#fcfcfc] border border-gray-200/80 rounded-2xl p-4 shadow-xs flex flex-col justify-between hover:shadow-md hover:border-[#004A7E] transition-all duration-300 group"
              >
                <div>
                  {/* Number Badge & City */}
                  <div className="flex items-center gap-3 mb-6">
                    <span className="w-8 h-8 rounded-full bg-[#00AEFF] text-white font-extrabold text-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                      {store.id}
                    </span>
                    <h3 className="font-bold text-xl md:text-2xl text-gray-900">
                      {store.city}
                    </h3>
                  </div>

                  {/* Address */}
                  <a
                    href={store.mapHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 mb-4 hover:text-[#004A7E] transition-colors group/link"
                  >
                    <MapPin className="w-5 h-5 text-gray-800 shrink-0 mt-1 group-hover/link:text-[#004A7E] transition-colors" />
                    <span className="text-gray-800 group-hover/link:text-[#004A7E] text-base font-medium leading-relaxed transition-colors">
                      {store.address}
                    </span>
                  </a>
                </div>

                {/* Phone Call Button */}
                <div className="mb-4">
                  <a
                    href={store.phoneHref}
                    className="flex items-center gap-3 text-gray-800 hover:text-[#004A7E] transition-colors duration-300"
                  >
                    <PhoneCall className="w-4 h-4 fill-current" />
                    <span className="font-medium text-base">
                      {store.phone}
                    </span>
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div >
    </section >
  );
}
