"use client";
import { CardProyect } from "@/components/CardProyect";
import { IMAGE_URL } from "@/utils/constans";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y, Parallax } from "swiper/modules";

export default function Home() {
  return (
    <div className="h-screen w-screen">
      <div className="h-full flex flex-col">
        <div className="h-8 flex items-center justify-center"></div>
        <div className="flex-1 p-3 space-y-3">
          <div className="container mx-auto flex flex-row gap-5 items-center justify-around">
            <Image
              src={IMAGE_URL}
              alt="Logo"
              width={500}
              height={500}
              priority
              className="rounded-full w-96 h-96 object-cover"
            />
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-4xl font-bold text-center">
                Hola <strong>Soy Domenica Vintimilla!</strong>
              </h1>
              <p>Ingeniera en Ciencias de la Computación</p>
              <div>
                <a
                  href="https://github.com/domenicavintimilla"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-center">Mis proyectos</h2>

          <div className="">
            <Swiper
              modules={[Navigation, Scrollbar, A11y, Parallax]}
              spaceBetween={50}
              slidesPerView={3}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
              loop
              className="h-full"
            >
              <SwiperSlide>
                <CardProyect />
              </SwiperSlide>
              <SwiperSlide>
                <CardProyect />
              </SwiperSlide>
              <SwiperSlide>
                <CardProyect />
              </SwiperSlide>
              <SwiperSlide>
                <CardProyect />
              </SwiperSlide>
              <SwiperSlide>
                <CardProyect />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="h-8 bg-violet-300 flex items-center justify-center">
          <span className="text-black">
            Made with love by Domenica Vintimilla 💜
          </span>
        </div>
      </div>
    </div>
  );
}
