import Image from "next/image";

const About = () => {
  return (
    <div className="mt-16 ">
      <p className="text-2xl">⚡️About Me</p>

      <div className="flex flex-col md:flex-row gap-4 mt-2">
        <div className="text-neutral-400 flex flex-col gap-3 md:w-2/3">
          <p>
            Hey! I'm Vishnu Vinod, I've been close to a computer since an early
            age, and been really passionate about it ever since. I’ve always
            loved creating something cool, and where else than in the internet
            itself.
          </p>
          <p>
            I started out building websites using no-code tools back in 2014,
            infact i still remember deploying my{" "}
            <a className="text-blue-300" href="https://speedcubing3.weebly.com">
              first website
            </a>{" "}
            on Weebly ,though it was just a really basic one, it still got a
            special place in my heart. And later on, I taught myself how to
            code, fast-forward to today, I do programming in various languages
            and technologies.
          </p>

          <p>
            I'm interested in building something awesome with code and automate
            tasks with code, currently focused on Web & Mobile Development.
          </p>
          <p>
            When I'm not coding I play games with my friends, binge shows/movies
            online, or if the weather's good, play basketball! 🏀 or sit down
            for a good game of chess. I also love listening to music. I mainly
            listen to Hip-Hop, Pop and Lofi songs
          </p>
        </div>
        <Image layout="fixed" src="/me.png" alt="me" width={64} height={64} />
      </div>
    </div>
  );
};

export default About;
