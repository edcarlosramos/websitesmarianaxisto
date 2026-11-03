import { MotionConfig } from "motion/react";

import { Navbar } from "./components";
import useSmoothScroll from "./hooks/useSmoothScroll";
import {
  About,
  Faq,
  FinalCta,
  Footer,
  Guarantee,
  Hero,
  Includes,
  Messages,
  Method,
  Problem,
  Results,
  Testimonials,
} from "./sections";

const App = () => {
  useSmoothScroll();

  return (
    <MotionConfig reducedMotion="user">
      <div className="relative w-full overflow-x-clip">
        <Navbar />
        <main>
          <Hero />
          <Problem />
          <Method />
          <Results />
          <Testimonials />
          <Messages />
          <About />
          <Includes />
          <Guarantee />
          <Faq />
          <FinalCta />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
};

export default App;
