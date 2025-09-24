"use client";
import Business from "@/assets/Lottie/Business.json";
import Lottie from "lottie-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Login } from "@/components/login";
import Cadastro from "@/components/cadastro";
import { useState } from "react";
import ForgotPassword from "@/components/forgot-password";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="flex justify-between items-center gap-5">
      <div className="w-1/2 h-screen p-3 flex items-center justify-center">
        <Lottie className="h-[35rem]" animationData={Business} />
      </div>
      <Carousel className="w-1/2 h-screen bg-card" opts={{ watchDrag: false }}>
        <CarouselContent
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
            transition: "transform 0.5s ease",
          }}
          className="flex w-full h-full"
        >
          <CarouselItem className="w-full flex-shrink-0">
            <Login
              onSwitchToRegister={() => setCurrentSlide(1)}
              onSwitchToForgotPassword={() => setCurrentSlide(2)}
            />
          </CarouselItem>
          <CarouselItem className="w-full flex-shrink-0">
            <Cadastro onSwitchToLogin={() => setCurrentSlide(0)} />
          </CarouselItem>
          <CarouselItem className="w-full flex-shrink-0">
            <ForgotPassword onSwitchToLogin={() => setCurrentSlide(0)} />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
}
