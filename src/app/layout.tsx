import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import "@/styles/globals.css";
import "@/styles/animations.css";
import { Archivo, Poppins } from "next/font/google";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
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
      className={`${archivo.variable} w-full text-slate-900 pt-10 md:p-0`}
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