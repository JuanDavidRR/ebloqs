import Hero from "@/sections/home/Hero";
import Projects from "@/sections/home/Projects";
import Team from "@/sections/home/Team";
import Testimonials from "@/sections/home/Testimonials";
import Video from "@/sections/home/Video";
import ProblemSolution from "@/sections/home/ProblemSolution";
import Ecosystem from "@/sections/home/Ecosystem";
import Calculator from "@/sections/home/Calculator";
import Example from "@/sections/home/Example";
import TokenEbl from "@/sections/home/TokenEbl";
import GetStarted from "@/sections/home/GetStarted";

export default function Home() {
  return (
    <main>
      <section className="relative">
        <Hero />
        <Video />
        <GetStarted />
        <ProblemSolution />
        <Testimonials />
        <Ecosystem />
        <div id="invierte">
        <Calculator />
        </div>
        {/* <Example /> */}
        <TokenEbl />
        <Projects />
        <Team />
      </section>
    </main>
  );
}
