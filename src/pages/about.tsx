import AboutMe from "@/components/about-me";
import Projects from "@/components/projects";

export default function About() {
  return (
    <>
      <div className="py-4 mt-6 md:py-8 lg:pt-8">
        <div className="px-4 sm:mx-4 lg:px-12 md:px-8 xl:px-24 xl:pt-10">
          {/* <Hero /> */}
          <AboutMe />
          {/* <SlideUpWhenVisible>
            <Image
              className="rounded-xl self-center lg:self-start w-screen sm:w-[85vw] lg:w-[500px] h-auto"
              width={500}
              height={500}
              src="/me.png"
              alt="Vishnu Vinod"
              priority
            />
          </SlideUpWhenVisible> */}
        </div>

        <Projects />
        {/* <Contact /> */}
      </div>
    </>
  );
}
// put this somewhere

//               I've been close to a computer since an early age, and been
//               passionate about it ever since. I started out building websites
//               using no-code tools back in 2012, infact i still remember
//               deploying my{" "} https://speedcubing3.weebly.com first website
