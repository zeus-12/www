import Head from "next/head";
import OldAbout from "../components/OldAbout";
import AboutMe from "../components/AboutMe";
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
      <AboutMe />

      {/* <OldAbout /> */}
      {/* <Projects /> */}
      {/* blogs ? */}
      <Contact />
      {/* github, linkedIn, Email */}
    </div>
  );
}
// put this somewhere

// When I'm not coding I play games with my friends, binge
//               shows/movies, sit down for a good game of chess, or if the
//               weather's good, play basketball! 🏀 I also love listening to
// Hip - Hop, Pop & Lo - Fi music.

// I've been close to a computer since an early age, and been
//               passionate about it ever since. I started out building websites
//               using no-code tools back in 2012, infact i still remember
//               deploying my{" "}
//               <a
//                 className="text-blue-300"
//                 href="https://speedcubing3.weebly.com"
//               >
//                 first website
//               </a>{" "}
//               on{" "}
//               <a className="text-blue-300" href="https://www.weebly.com">
//                 Weebly
//               </a>{" "}
//               ,though it was just a really basic one, it still got a special
//               place in my ❤️.
