import Hero from "../components/HeroSection";
import Menu from "../components/MenuSection";
import Testimonials from "../components/Testimonials";
import Description from "../components/FooterText";
export default function HomePage() {
  return (
    <main>
      <Hero />
      <Menu />
      <Testimonials />
      <Description />
    </main>
  );
}
