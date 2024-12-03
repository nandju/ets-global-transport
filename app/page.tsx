"use client"

import Image from "next/image";
import Navbar from "./components/default/navbar";
import Hero from "./components/ui/hero-section";
import Solution from "./components/ui/solution-section";
import { use } from "react";

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Solution/>
    </div>
  );
}
