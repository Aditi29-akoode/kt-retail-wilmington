import Image from "next/image";

const LOGOS = [
  { name: "Nintendo", path: "/images/landing-page/strip/nintendo.png" },
  { name: "PlayStation", path: "/images/landing-page/strip/ps5.png" },
  { name: "Apple", path: "/images/landing-page/strip/apple.png" },
  { name: "Samsung", path: "/images/landing-page/strip/samsung.png" },
  { name: "Lenovo", path: "/images/landing-page/strip/lenevo.png" },
  { name: "Xbox", path: "/images/landing-page/strip/xbox.png" },
];

export default function Strip() {
  // We repeat logos to ensure smooth infinite scrolling even on ultra-wide screens.
  const repeatedLogos = [...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS];

  return (
    <section className="w-full bg-white border-y border-gray-100 py-8 lg:py-6 overflow-hidden flex flex-nowrap relative group">
      <style>{`
        @keyframes custom-marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
      {[...Array(2)].map((_, blockIndex) => (
        <div
          key={blockIndex}
          className="flex items-center flex-nowrap gap-12 md:gap-24 lg:gap-32 pr-12 md:pr-24 lg:pr-32 w-max flex-shrink-0 group-hover:[animation-play-state:paused] will-change-transform"
          style={{ animation: 'custom-marquee 50s linear infinite' }}
        >
          {repeatedLogos.map((logo, index) => (
            <div
              key={`${blockIndex}-${logo.name}-${index}`}
              className="relative grayscale transition-all duration-300 hover:grayscale-0 opacity-80 hover:opacity-100 flex-shrink-0 flex items-center justify-center"
            >
              <Image
                src={logo.path}
                alt={logo.name}
                width={120}
                height={40}
                className="h-5 lg:h-6 w-auto max-w-none object-contain"
                priority={true}
              />
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}
