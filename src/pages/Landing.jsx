import SEO from '../components/ui/SEO.jsx';
import Hero from '../components/sections/Hero.jsx';
import Problem from '../components/sections/Problem.jsx';
import Solution from '../components/sections/Solution.jsx';
import Products from '../components/sections/Products.jsx';
import Traction from '../components/sections/Traction.jsx';
import WhyNow from '../components/sections/WhyNow.jsx';
import TeamTeaser from '../components/sections/TeamTeaser.jsx';
import CTA from '../components/sections/CTA.jsx';

export default function Landing() {
  return (
    <>
      <SEO />
      <Hero />
      <Problem />
      <Solution />
      <Products />
      <Traction />
      <WhyNow />
      <TeamTeaser />
      <CTA />
    </>
  );
}
