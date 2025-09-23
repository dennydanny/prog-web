"use client"
import Business from "@/assets/Lottie/Business.json"
import Lottie from "lottie-react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Login } from "@/components/login";
import Cadastro from "@/components/cadastro";

export default function Home() {

  return (
    <div className="flex justify-between items-center gap-5">
      <div className="w-1/2 h-screen p-3 flex  items-center justify-center">
        <Lottie className="h-[35rem]" animationData={Business} />
      </div>
      <Carousel className="w-1/2 h-screen">
        <CarouselContent>
          <CarouselItem >
            <Login />
          </CarouselItem>
          <CarouselItem>
            <Cadastro/>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
}
