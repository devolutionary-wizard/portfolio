import {Inter} from "@next/font/google";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/Contact";

const inter = Inter({subsets: ["latin"]});

export default function Home() {
<<<<<<< HEAD
  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <HeroSection />
      <AboutSection />
      <PassionSection />
      {/* <ProjectsSection /> */}
    </main>
  );
=======
    return (
        <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
            <HeroSection/>
        </main>
    );
>>>>>>> dev
}
