import { MotionConfig } from "motion/react";

import { Navbar } from "../components";
import useSmoothScroll from "../hooks/useSmoothScroll";
import Footer from "../sections/Footer";
import { cta, navLinks } from "./content";
import Benefits from "./sections/Benefits";
import Faq from "./sections/Faq";
import FinalCta from "./sections/FinalCta";
import Guarantee, { Urgency } from "./sections/Guarantee";
import Hero from "./sections/Hero";
import HowItWorks from "./sections/HowItWorks";
import Mentor from "./sections/Mentor";
import Objections from "./sections/Objections";
import Offer from "./sections/Offer";
import Opening from "./sections/Opening";
import Pain from "./sections/Pain";
import Proof from "./sections/Proof";

// Sales page for the "Desafio Fale Inglês em 14 Dias", served at /desafio14d/.
const App = () => {
  useSmoothScroll();

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative w-full overflow-x-clip">
        <Navbar theme="dark" links={navLinks} cta={{ label: cta.short, href: cta.href, note: cta.note, pulse: cta.pulse }} />
        <main>
          <Hero />
          <Opening />
          <Pain />
          <HowItWorks />
          <Benefits />
          <Proof />
          <Mentor />
          <Offer />
          <Objections />
          <Guarantee />
          <Urgency />
          <Faq />
          <FinalCta />
        </main>
        <Footer links={navLinks} tagline="Desafio Fale Inglês em 14 Dias: 20 minutos por dia, com correção individual da sua pronúncia." />
      </div>
    </MotionConfig>
  );
};

export default App;
