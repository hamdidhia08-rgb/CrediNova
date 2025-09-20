import Hero from "@/Components/Hero/Hero";
import Nav from "@/Components/Navbar/Nav";
import About from "@/Components/About/About";
import Image from "next/image";
import Pricing from "@/Components/Pricing/Pricing";
import Footer from "@/Components/Footer/Footer";

export default function Home() {
  return (
 <>
 <Nav/>
 <Hero/>
 <About/>
 <Pricing/>
 <Footer/>
 </>
  );
}
