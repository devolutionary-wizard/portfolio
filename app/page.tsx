import {Inter} from "@next/font/google";
import HeroSection from "@/components/HeroSection";

const inter = Inter({subsets: ["latin"]});

export default function Home() {
    return (
        <main className="container-md">
            <HeroSection/>
        </main>
    );
}
