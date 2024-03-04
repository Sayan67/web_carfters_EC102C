import "./globals.css";
import { Inter } from "next/font/google";
// import Header from "@/components/layout/Header";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Devwrap ECE Store",
  description: "E-commerce app",
  icon: "./favicon.ico",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth h-full">
      <body className={`${inter.className} bg-slate-300`}>
        {/* <Header /> */}
        <div className=" mx-auto">
          <Navbar />
          {/* max-w-[90%] */}
          <main className="w-full h-full">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
