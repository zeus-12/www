import Image from "next/image";

const About = () => {
  return (
    <div className="mt-16 ">
      <p className="text-2xl">⚡️About Me</p>

      <div className="flex flex-col md:flex-row gap-4 mt-2">
        <div className="text-neutral-400 flex flex-col gap-3 md:w-2/3 md:max-w-2xl">
          <p>
            Hey! I'm Vishnu Vinod, I've been close to a computer since an early
            age, and been really passionate about it ever since. I started out
            building websites using no-code tools back in 2014, infact i still
            remember deploying my{" "}
            <a href="https://speedcubing3.weebly.com">first website</a> on{" "}
            <a className="text-blue-300" href="https://www.weebly.com">
              Weebly
            </a>{" "}
            ,though it was just a really basic one, it still got a special place
            in my heart.
          </p>

          <p>
            And later on, I taught myself how to code, fast-forward to today, I
            do programming in various languages and technologies. I'm interested
            in building something awesome with code and automate tasks with
            code, currently focused on Web & Mobile Development.
          </p>
          <p>
            When I'm not coding I play games with my friends, binge
            shows/movies, sit down for a good game of chess, or if the weather's
            good, play basketball! 🏀 I also love listening to Hip-Hop, Pop &
            Lofi music.
          </p>
        </div>

        <div
          className="rounded-lg flex flex-1"
          style={{ width: "100%", position: "relative" }}
        >
          <Image src="/me.png" alt="me" layout="fill" objectFit="contain" />
        </div>
      </div>
    </div>
  );
};

export default About;
