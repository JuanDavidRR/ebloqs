import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/sections/home/Hero"));
const HowWorks = dynamic(() => import("@/sections/home/HowWorks"));
const Projects = dynamic(() => import("@/sections/home/Projects"));
const Team = dynamic(() => import("@/sections/home/Team"));
const Testimonials = dynamic(() => import("@/sections/home/Testimonials"));
const Video = dynamic(() => import("@/sections/home/Video"));
const ProblemSolution = dynamic(() => import("@/sections/home/ProblemSolution"));
const Ecosystem = dynamic(() => import("@/sections/home/Ecosystem"));
const Calculator = dynamic(() => import("@/sections/home/Calculator"));
const TokenEbl = dynamic(() => import("@/sections/home/TokenEbl"));
const GetStarted = dynamic(() => import("@/sections/home/GetStarted"));
const AudioPlayer = dynamic(() => import("@/sections/home/Podcast"));
const SpotifyPlayer = dynamic(() => import("@/components/SpotifyPlayer"));


export default function Home() {
  return (
    <main>
      <SpotifyPlayer/>
      <Hero />
      <HowWorks/>
      <Video />
      <GetStarted />
      <ProblemSolution />
      {/* <Testimonials /> */}
      <Ecosystem />
      <Calculator />
      {/* <Example /> */}
      <TokenEbl />
      <Projects />
      <Team />
      <AudioPlayer/>
    </main>
  );
}
