import Head from "next/head";
import About from "../components/About";
import Animation from "../components/Animation";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <div className="p-4 mt-6 sm:mx-4 md:p-8 lg:px-12 lg:pt-16">
      <Head>
        <title>Vishnu Vinod - Software Engineer</title>
        <meta name="description" content="Portfolio Website" />
        {/* TODO change  */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Animation />

      {/* <About /> */}
      <Projects />
      {/* blogs ? */}
      <Contact />
      {/* github, linkedIn, Email */}
    </div>
  );
}
