import Image from "next/image";
import Link from "next/link";

export default function Logo({ className = "", onClick }) {
  return (
    <Link href="/" className={`inline-block ${className}`} onClick={onClick}>
      <Image
        src="/images/khem-tech-logo.png"
        alt="KHEM TECH"
        width={140}
        height={40}
        className="object-contain w-[clamp(90px,8vw,140px)] h-auto"
        priority
      />
    </Link>
  );
}
