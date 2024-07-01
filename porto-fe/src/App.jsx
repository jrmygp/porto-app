import { useState } from "react";

import Hero from "./components/Hero";
import MobileMenuButton from "./components/MobileMenuButton";
import Navbar from "./components/Navbar";
import classes from "./App.module.css";
import MobileMenuList from "./components/MobileMenuList";
import Projects from "./components/Projects";
import TechStacks from "./components/TechStacks";
import AdditionalTech from "./components/AdditionalTech";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import AnimationWrapper from "./components/AnimationWrapper";

function App() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <div>
      <div className="hidden lg:block sticky top-0 z-50">
        <Navbar />
      </div>

      <div className="flex lg:hidden sticky top-10 z-50 justify-end mr-5">
        <MobileMenuButton toggle={toggleMenu} isOpen={menuIsOpen} />
      </div>

      <div className="flex flex-col gap-44 px-5 lg:px-40 mt-20 pb-10">
        <section id="introduction">
          <AnimationWrapper>
            <Hero />
          </AnimationWrapper>
        </section>

        <section id="projects">
          <AnimationWrapper>
            <Projects />
          </AnimationWrapper>
        </section>

        <section id="technologies" className="flex flex-col gap-32">
          <AnimationWrapper>
            <TechStacks />
          </AnimationWrapper>

          <AnimationWrapper>
            <AdditionalTech />
          </AnimationWrapper>
        </section>

        <section id="about-me">
          <AnimationWrapper>
            <AboutMe />
          </AnimationWrapper>
        </section>

        <Footer />

        <div className={`${classes.menu} ${!menuIsOpen && classes.close}`}>
          <MobileMenuList onClick={toggleMenu} />
        </div>
      </div>
    </div>
  );
}

export default App;
