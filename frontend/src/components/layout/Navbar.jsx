"use client";

import { Button } from "@/components/ui/Button";
import Logo from "@/components/ui/Logo";
import { Menu, ArrowUpRight, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
    {
        label: "About Us",
        href: "/",
        // dropdown: [
        //     { label: "Our Story", href: "/about-us#our-story" },
        //     { label: "Social Medias", href: "https://kt-directory.vercel.app", target: "_blank", rel: "noopener noreferrer" },
        //     { label: "Directory", href: "https://kt-directory.vercel.app", target: "_blank", rel: "noopener noreferrer" },
        //     { label: "Terms & Conditions", href: "/privacy-policy" },
        // ]
    },
    {
        label: "Services",
        href: "/",
        dropdown: [
            { label: "Phone Repair", href: "/" },
            { label: "Console Repair", href: "/" },
            { label: "Laptop Repair", href: "/" },
            { label: "Specialty Repair", href: "/" },
        ]
    },
    { label: "Events", href: "/" },
    { label: "Contact", href: "/" },
];


export default function Navbar({ variant = "main", className }) {
    const isSpecial = variant === "secondary";
    const links = NAV_LINKS;
    const pathname = usePathname();

    const navRef = useRef(null);
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [hoveredLink, setHoveredLink] = useState(null);
    const [mobileExpanded, setMobileExpanded] = useState(null);

    // Close menu when route changes
    useEffect(() => {
        setIsOpen(false);
        setMobileExpanded(null);
    }, [pathname]);

    // Prevent scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);


    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Handle click outside to close menu
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    return (
        <nav className={cn(
            "fixed left-1/2 -translate-x-1/2 z-50 md:w-[80%] w-[95%] transition-all duration-500",
            scrolled ? "top-[12px]" : "top-16",
            className
        )}>
            <div ref={navRef} className="relative bg-white/100 backdrop-blur-md border border-gray-100 rounded-full px-4 py-2 flex items-center justify-between gap-0 
shadow-[-2px_2px_10px_rgba(203,203,203,0.3),0px_0px_6px_rgba(213,220,225,0.4)] transition-all duration-300">
                <Logo
                    className="ml-4"
                    onClick={(e) => {
                        setIsOpen(false);
                        if (pathname === "/") {
                            e.preventDefault();
                            window.history.pushState(null, "", "/"); 
                            window.scrollTo({ top: 0, behavior: "smooth" });
                        }
                    }}
                />

                <div className="hidden lg:flex items-center gap-10">
                    {links.map((link) => (
                        <div
                            key={link.label}
                            className="relative group py-2"
                            onMouseEnter={() => setHoveredLink(link.label)}
                            onMouseLeave={() => setHoveredLink(null)}
                        >
                            <div className="flex items-center gap-1 cursor-pointer">
                                <Link
                                    href={link.href}
                                    onClick={(e) => {
                                        if (link.href === "/about-us") {
                                            e.preventDefault();
                                            window.location.href = "/about-us"; // force reset hash
                                        }
                                    }}
                                    className="text-gray-800 hover:text-black font-catamaran font-semibold text-lg transition-colors"
                                >
                                    {link.label}
                                </Link>
                                {link.dropdown && (
                                    <ChevronDown className={cn("w-4 h-4 text-gray-500 transition-transform duration-300", hoveredLink === link.label && "rotate-180")} />
                                )}
                            </div>

                            {/* Desktop Dropdown */}
                            <AnimatePresence>
                                {link.dropdown && hoveredLink === link.label && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -15, scale: 0.98 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: -15, scale: 0.98 }}
                                        transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                                        className="absolute top-full left-0 pt-2"
                                    >
                                        <div className="bg-white border border-gray-100 rounded-2xl p-2 shadow-xl min-w-[200px]">
                                            {link.dropdown.map((sub) => (
                                                <Link
                                                    key={sub.label}
                                                    href={sub.href}
                                                    target={sub.target}
                                                    rel={sub.rel}
                                                    className="block px-4 py-2 text-gray-700 hover:text-black hover:bg-gray-50 rounded-xl font-catamaran font-medium text-base transition-all"
                                                >
                                                    {sub.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

                <div className="flex items-center -gap-1 lg:gap-4">
                    <Link href="/" onClick={() => setIsOpen(false)}>
                        <Button
                            variant="nav"
                            size="sm"
                            icon={ArrowUpRight}
                            iconPlacement="left"
                            rotate={true}
                            className="font-semibold inline-flex cursor-pointer text-xs pr-4 uppercase"
                        >
                            START REPAIR
                        </Button>
                    </Link>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-2 text-gray-800 hover:bg-gray-100 rounded-full transition-colors"
                        aria-label="Toggle Menu"
                    >
                        <span className="relative w-6 h-6 flex items-center justify-center">

                            {/* Top Line */}
                            <span
                                className={cn(
                                    "absolute w-5 h-[1.5px]",
                                    "transition-transform duration-200 ease-[cubic-bezier(0.4,0,0.2,1)]",
                                    isOpen
                                        ? "translate-y-0"
                                        : "-translate-y-[4px] delay-100"
                                )}
                            >
                                <span
                                    className={cn(
                                        "block w-full bg-current rounded-full origin-center",
                                        "transition-all duration-150 ease-[cubic-bezier(0.4,0,0.2,1)]",
                                        isOpen
                                            ? "rotate-45 delay-100 h-[1.8px]"
                                            : "rotate-0 delay-0 h-[1.8px]"
                                    )}
                                />
                            </span>

                            {/* Bottom Line */}
                            <span
                                className={cn(
                                    "absolute w-5 h-[1.5px]",
                                    "transition-transform duration-200 ease-[cubic-bezier(0.4,0,0.2,1)]",
                                    isOpen
                                        ? "translate-y-0"
                                        : "translate-y-[4px] delay-100"
                                )}
                            >
                                <span
                                    className={cn(
                                        "block w-full bg-current rounded-full origin-center",
                                        "transition-all duration-150 ease-[cubic-bezier(0.4,0,0.2,1)]",
                                        isOpen
                                            ? "-rotate-45 delay-100 h-[1.8px]"
                                            : "rotate-0 delay-0 h-[1.8px]"
                                    )}
                                />
                            </span>

                        </span>
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: -20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -20 }}
                            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            className="absolute top-full left-0 right-0 mt-1 bg-white backdrop-blur-xl border border-gray-100 rounded-3xl p-6 shadow-2xl flex flex-col gap-4 lg:hidden"
                        >
                            {links.map((link, i) => (
                                <motion.div
                                    key={link.label}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    className="flex flex-col"
                                >
                                    <div className="flex items-center justify-between py-1 border-b border-gray-50 last:border-0">
                                        <Link
                                            href={link.href}
                                            onClick={(e) => {
                                                setIsOpen(false);
                                                if (link.href === "/about-us") {
                                                    e.preventDefault();
                                                    window.location.href = "/about-us";
                                                }
                                            }}
                                            className="text-gray-800 hover:text-black font-catamaran font-bold text-xl flex-1"
                                        >
                                            {link.label}
                                        </Link>
                                        {link.dropdown && (
                                            <button
                                                onClick={() => setMobileExpanded(mobileExpanded === link.label ? null : link.label)}
                                                className="p-2"
                                            >
                                                <ChevronDown className={cn("w-6 h-6 text-gray-400 transition-transform", mobileExpanded === link.label && "rotate-180")} />
                                            </button>
                                        )}
                                    </div>

                                    {/* Mobile Dropdown Items */}
                                    <AnimatePresence>
                                        {link.dropdown && mobileExpanded === link.label && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="overflow-hidden flex flex-col pl-4 mt-2 gap-2"
                                            >
                                                {link.dropdown.map((sub) => (
                                                    <Link
                                                        key={sub.label}
                                                        href={sub.href}
                                                        target={sub.target}
                                                        rel={sub.rel}
                                                        onClick={() => setIsOpen(false)}
                                                        className="text-gray-600 hover:text-black font-catamaran font-medium text-lg py-1"
                                                    >
                                                        {sub.label}
                                                    </Link>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
}
