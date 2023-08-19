import DownloadBtn from "@/components/DownloadBtn";
import GetStarted from "@/sections/home/GetStarted";
import Hero from "@/sections/home/Hero";
import Projects from "@/sections/home/Projects";
import Team from "@/sections/home/Team";
import Testimonials from "@/sections/home/Testimonials";
import Video from "@/sections/home/Video";

export default function Home() {
  return (
    <main>
      <section className="relative">
        <Hero />
        <Video/>
        <GetStarted/>
        <Projects/>
        <Team/> 
        <Testimonials/>  
      </section>
    </main>
  );
}
