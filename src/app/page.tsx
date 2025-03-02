import Navbar from "./components/navbar";
import HeroSection from "./components/HeroSection";
import LogoCarousel from "./components/LogoCarousel";

export default function Home() {
  return (
    <div className="bg-black">
  	<Navbar />
	<HeroSection />
	<LogoCarousel />
	<section>section 1</section>
	<footer>I am the footer!</footer>
    </div>
  );
}