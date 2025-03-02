import Navbar from "./components/navbar";
import HeroSection from "./components/HeroSection";
import LogoCarousel from "./components/LogoCarousel";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-black text-stone-50">
		<Navbar />
		<HeroSection />
		<LogoCarousel />
		<section>section 1</section>
		<Footer />
    </div>
  );
}