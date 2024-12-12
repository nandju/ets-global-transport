import Hero from "../components/ui/hero-section";
import Solution from "../components/ui/solution-section";
import Advantage from "../components/ui/advantage-section";
import Testimonial from "../components/ui/testimonial-section";
import Faq from "../components/ui/faq-section";
import CamionsSection from "@/components/ui/camions-section";

export default function Home() {
  return (
    <div>
      <Hero />
      <Solution />
      <CamionsSection />
      <Advantage />
      <Testimonial />
      <Faq />
    </div>
  );
}
