import "./globals.css";
import { Inter } from "next/font/google";
import Loader from "@/components/layout/Loader";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hariom Kushwah - Web Designer Portfolio",
  description:
    "Creative Web Designer specializing in brand identity, web design, and digital experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Loader />
        <div className="opacity-0 animate-fadeIn">
          {children}
        </div>
      </body>
    </html>
  );
}
