import { Inter, Catamaran } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const catamaran = Catamaran({
  variable: "--font-catamaran",
  subsets: ["latin"],
});

export const metadata = {
  title: "KhemTech Retail",
  description: "Welcome to KhemTech Retail",
  icons: {
    icon: "/images/khemtech-favicon.webp",
    shortcut: "/images/khemtech-favicon.webp",
    apple: "/images/khemtech-favicon.webp",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${catamaran.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
