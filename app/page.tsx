import Hero from "../components/ui/hero-section";
import Services from "../components/ui/service-section";
import Advantage from "../components/ui/advantage-section";
import Testimonial from "../components/ui/testimonial-section";
import Faq from "../components/ui/faq-section";
import CamionsSection from "@/components/ui/camions-section";
import { MarqueeDemo } from "@/components/ui/testimonialhuman";
import { Press } from "@/components/ui/partners";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Press />
      <CamionsSection />
      <Advantage />
      <MarqueeDemo />
      <Testimonial />
      <Faq />
    </div>
  );
}
