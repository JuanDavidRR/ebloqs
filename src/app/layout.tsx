import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import "@/styles/globals.css";
import "@/styles/animations.css";
import { Raleway, Poppins } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
  weight: ["500", "600", "700", "900"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["400", "500", "600", "700", "900"],
});

export const metadata = {
  title: "Ebloqs",
  description: "La nueva forma de invertir",
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html
      lang="es"
      className={`${raleway.variable} ${poppins.variable} w-full text-slate-900 pt-20 md:pt-12`}
    >
      <body className="w-full">
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}

interface LayoutProps {
  children: React.ReactNode;
}