import Image from "next/image";
import Navbar from "./components/navbar";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <div className="bg-black">
  	<Navbar />
	<HeroSection />
	<section>section 1</section>
	<footer>I am the footer!</footer>
    </div>
  );
}