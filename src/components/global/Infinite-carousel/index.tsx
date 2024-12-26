"use client";

import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface CardItem {
  title: string;
  description: string;
  imagePath: string;
}

const CARD_ITEMS: CardItem[] = [
  {
    title: "AI-Powered Analysis",
    description: "Transform your document understanding with advanced AI technology",
    imagePath: "/picture_1.webp"
  },
  {
    title: "Real-time Chat Interface",
    description: "Engage with your documents through an intuitive chat interface.",
    imagePath: "/picture_2.webp"
  },
  {
    title: "Secure Document Handling",
    description: "Enterprise-grade security ensures your documents remain protected.",
    imagePath: "/picture_3.webp"
  },
  {
    title: "Smart Citations",
    description: "Every insight is backed by precise citations for verification.",
    imagePath: "/picture_4.webp"
  }
];

function FeatureCard({ item }: { item: CardItem }) {
  return (
    <Card className="relative overflow-hidden min-h-[500px] group flex justify-between flex-col">
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url(${item.imagePath})` }}
      />
      <div className="absolute inset-0  transition-opacity duration-500" />
      
      <CardHeader className="relative z-10">
        <CardTitle className="text-base font-bold text-white">
          {item.title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="relative z-10 mt-auto flex items-end h-full pb-6">
        <CardDescription className="text-base text-white/90 font-medium">
          {item.description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}

export function InfiniteCarousel() {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);

  React.useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isMobile) {
    return (
      <div className="w-full min-h-screen p-4 space-y-4">
        {CARD_ITEMS.map((item, index) => (
          <FeatureCard key={index} item={item} />
        ))}
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen flex items-center">
      <div className="w-full max-w-7xl mx-auto pl-24">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {CARD_ITEMS.map((item, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <FeatureCard item={item} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-16 hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </div>
  );
}