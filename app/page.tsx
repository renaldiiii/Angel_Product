import { products, navItems } from "@/data";

import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { HeroParallax } from "@/components/ui/Hero-Parallax";
import Header from "@/components/Header";
import About from "@/components/About";
import { HeroScrollDemo } from "@/components/Product";
import Production from "@/components/Production-Flow";
import { LayoutGridDemo } from "@/components/Gallery";
import MeteorsDemo from "@/components/Certificate";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <FloatingNav navItems={navItems} />
        <Header />
        <About />
        <HeroScrollDemo />
        <HeroParallax products={products} />
        <Production />
        <LayoutGridDemo />
        <MeteorsDemo />
        <Footer />
      </main>
    </>
  );
}
