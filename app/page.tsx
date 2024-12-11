import Hero from "../components/ui/hero-section";
import Solution from "../components/ui/solution-section";
import Advantage from "../components/ui/advantage-section";
import Testimonial from "../components/ui/testimonial-section";
import Faq from "../components/ui/faq-section";


export default function Home() {
  return (
    <div>
      <Hero/>
      <Solution/>
      <Advantage/>
      <Testimonial/>
      <Faq/>
    </div>
  );
}
