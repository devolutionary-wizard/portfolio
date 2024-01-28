import {Inter} from "@next/font/google";
import HeroSection from "@/components/HeroSection";
import {AboutSection} from "@/components/About";
import {TechnologiesSection} from "@/components/Technology";

const inter = Inter({subsets: ["latin"]});

export default function Home() {
    return (
        <main className="container-md">
            <HeroSection/>
            <AboutSection/>
            <TechnologiesSection/>
        </main>
    );
}
