// import { motion, useScroll } from "framer-motion";

import About from "@/components/blocks/About";
import Contact from "@/components/blocks/Contact";
import Footer from "@/components/blocks/Footer";
import Hero from "@/components/blocks/Hero";
import SelectedWork from "@/components/blocks/SelectedWork";
import Team from "@/components/blocks/Team";
import {
  homeAbout,
  homeContact,
  homeHero,
  homeSelectedWork,
  homeTeam,
  sharedFooter,
} from "velite-generated";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-center">
      {homeHero && <Hero {...homeHero} />}
      {homeAbout && <About {...homeAbout} />}
      {homeSelectedWork && <SelectedWork {...homeSelectedWork} />}
      {homeTeam && <Team {...homeTeam} />}
      {homeContact && <Contact {...homeContact} />}
      {sharedFooter && <Footer {...sharedFooter} />}
    </main>
  );
}
