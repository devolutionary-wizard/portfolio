import HeroSection from "@/components/HeroSection";
import { AboutSection } from "@/components/About";
import { TechnologiesSection } from "@/components/Technology";
import { Hind } from "@next/font/google";

const inter = Hind({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  return (
    <main className={`${inter.className} container-md`}>
      <HeroSection />
      <AboutSection />
      <TechnologiesSection />
    </main>
  );
}
