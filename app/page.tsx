"use client"

import Image from "next/image";
import Navbar from "./components/default/navbar";
import Hero from "./components/ui/hero-section";
import Solution from "./components/ui/solution-section";
import { use } from "react";
import Advantage from "./components/ui/advantage-section";
import Testimonial from "./components/ui/testimonial-section";
import Faq from "./components/ui/faq-section";
import Footer from "./components/ui/footer";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Solution/>
      <Advantage/>
      <Testimonial/>
      <Faq/>
      <Footer/>
    </div>
  );
}
