import Hero from "../components/modules/landing-module/Hero";
import Platforms from "../components/modules/landing-module/Platform";
import Partners from "../components/modules/landing-module/Partners";
import Features from "../components/modules/landing-module/Features";
import Security from "../components/modules/landing-module/Security";
import Steps from "../components/modules/landing-module/Steps";
import Scale from "../components/modules/landing-module/Scale";
import Contact from "../components/modules/landing-module/Contact";

export default function Landing() {
    return (
      <main>
        <Hero />
        <Platforms />
        <Partners />
        <Features />
        <Security />
        <Steps />
        <Scale />
        <Contact />
      </main>
    );
  }
