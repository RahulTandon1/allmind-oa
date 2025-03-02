import Navbar from "./components/navbar";
import HeroSection from "./components/HeroSection";
import LogoCarousel from "./components/LogoCarousel";
import Footer from "./components/Footer";
import Features from "./components/Features";
import FAQSection from "./components/FAQs";
import APISignup from "./components/APISignup";
import StartForFree from "./components/StartForFree";
export default function Home() {
  return (
    <div className="bg-black text-stone-50">
		<Navbar />
		<HeroSection />
		<LogoCarousel />
		<Features />
		<APISignup />
		<FAQSection />
		<StartForFree />
		<Footer />
    </div>
  );
}