"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Quote } from "lucide-react";

// copied from fmhy feedback page
const FEEDBACKS = [
  "Most benevolent project of all time! Appreciate everyone working on keeping this better",
  "tysm for making this wiki, also thanks to my adhd brain which had the brilliant idea of browsing r/piracy subreddit while i should worked on my resume. otherwise i am sure i still would have only used revanced or similar. yall so amazing, the community, the discord, everything. ty ty ty ❤️ :3",
  "este bueno, soy de latam, la pagina la encontre por reddit y me parecio buena, buen trabajo, se les quiere",
  "Love you all those , who are involve in this project and for your services... You are angels  in my eyes.. i know you don't accept donations but you deserved to be appreciated in every manner as possible..finaly love you again❤️",
  "Absolutely amazing, perfect, and a lifesaver",
  "makes my life easier. keep up",
  "just found this amazing resource THANK YOU VERY MUCH ",
  "Thankyouu, the search is really fast and accurate. 🧡",
  "nice site! very usefully organized",
];

const FeedbackCarousel = () => {
  return (
    <Carousel
      opts={{
        loop: true,
        align: "center",
      }}
      plugins={[
        Autoplay({
          delay: 3000,
          stopOnInteraction: false,
        }),
      ]}
      className="w-full max-w-lg mx-auto my-16"
    >
      <CarouselContent>
        {FEEDBACKS.map((feedback, index) => (
          <CarouselItem key={index} className="flex items-center">
            <div className="max-w-md mx-auto px-8 py-6 relative">
              <Quote className="w-6 h-6 text-gray-600 fill-gray-600 absolute top-0 left-0" />
              <p className="text-gray-300 text-base md:text-lg italic pl-8 pt-2">
                {feedback}
              </p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex" />
      <CarouselNext className="hidden md:flex" />
    </Carousel>
  );
};

export default FeedbackCarousel;
