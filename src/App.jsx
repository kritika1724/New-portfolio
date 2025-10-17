import Header from "./assets/components/Header";
import Hero from "./assets/components/Hero";
import Projects from "./assets/components/Projects";
import About from "./assets/components/About";
import Skills from "./assets/components/Skills";
import Education from "./assets/components/Education";
import Hobbies from "./assets/components/Hobbies";
import Footer from "./assets/components/Footer";
import JhalarFooter from "./assets/components/JhalarFooter";
export default function App() {
  return (

    <div className="font-sans text-slate-900">
      <Header />
      <Hero /> 
      <JhalarFooter/>
      <About />
      <JhalarFooter/>
      <Education />
      <JhalarFooter/>
      <Skills/>
      <JhalarFooter/>
      <Projects />
      <JhalarFooter/>
      <Hobbies />
      <Footer />
    </div>
  );
}
