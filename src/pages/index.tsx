import Link from "@/components/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
// import { Inter } from "next/font/google";

const WORKS = [
  {
    items: [
      {
        start: "Dual Degree in Engineering Design at",
        end: (
          <Link monochrome={true} href="https://www.iitm.ac.in/">
            IIT Madras
          </Link>
        ),
      },
      {
        start: "Building",
        end: (
          <Link monochrome={true} href="https://uxie.vercel.app">
            uxie
          </Link>
        ),
      },
    ],
    text: "Currently",
    tw: "bg-green-300 animate-ping ",
  },
  {
    items: [
      {
        start: "Quant Analyst intern at",
        end: (
          <Link monochrome={true} href="https://www.natwestgroup.com/">
            NatWest
          </Link>
        ),
      },
    ],
    tw: "bg-black",
    text: "Previously",
  },
];

// const inter = Inter({
//   subsets: ["latin"],
//   display: "swap",
// });
const Landing = () => {
  return (
    <div
      className={cn(
        "px-4 py-12 lg:flex lg:items-center lg:justify-between min-h-screen h-full text-sm text-[0.9rem]"
        // inter.className
      )}
    >
      <div className=" lg:max-w-lg mx-auto space-y-8">
        <p className="text-base tracking-tight">
          Vishnu Vinod is a product designer helping founders realize solutions
          through design. Interested in ideas surrounding fullstack, mobile
          development, automations, & artificial intelligence.
        </p>

        {WORKS.map((item, id) => (
          <div key={id} className="space-y-2">
            <div className="flex items-center relative">
              <div
                className={cn("w-1 h-1 rounded-full absolute -left-3", item.tw)}
              />
              <p>{item.text}</p>
            </div>
            {item.items.map((item, idx) => (
              <li className="list-none" key={idx}>
                <span className="text-gray-400">{item.start}</span> {item.end}
              </li>
            ))}
          </div>
        ))}

        <Button className="dark:">Say Hello</Button>
      </div>
    </div>
  );
};

export default Landing;
