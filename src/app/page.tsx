"use client";
import { redesAPI } from "@/api/redes";
import { Proyects } from "@/components/proyects";
import { Iredes } from "@/ts/IRedes";
import { IMAGE_URL } from "@/utils/constans";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaSquareGithub, FaLinkedin } from "react-icons/fa6";

export default function Home() {
  const [redes, setRedes] = useState<Iredes[]>([]);

  const obtenerRedes = async () => {
    const res = await redesAPI.listar();
    const { error, data } = res;
    if (error !== null) {
      console.error("Error al obtener las redes:", error);
      return;
    }
    console.log("redes===>", res);
    setRedes(data as Iredes[]);
  };

  useEffect(() => {
    if (redes.length === 0) {
      obtenerRedes();
    }
  }, [redes]);

  const iconMap: { [key: string]: React.ElementType } = {
    FaSquareGithub,
    FaLinkedin,
  };

  return (
    <div className="h-screen w-screen">
      <div className="h-full flex flex-col">
        <div className="h-8 flex items-center justify-center"></div>
        <div className="flex flex-col flex-1 p-3 justify-between">
          <div className="container mx-auto flex flex-row gap-5 items-center justify-evenly">
            <Image
              src={IMAGE_URL}
              alt="Logo"
              width={500}
              height={500}
              priority
              className="rounded-full w-64 h-64 object-cover"
            />
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-4xl font-bold text-center">
                Hola <strong>Soy Domenica Vintimilla!</strong>
              </h1>
              <p>Ingeniera en Ciencias de la Computación</p>
              <div className="flex flex-row items-center gap-1">
                {redes.map((item) => (
                  <Link
                    key={item.red_id}
                    href={item.red_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    // className={`text-2xl transition-colors duration-200 cursor-pointer ${item.red_class}`}
                    title={item.red_nombre || ""}
                  >
                    {iconMap[item.red_icono] ? (
                      React.createElement(iconMap[item.red_icono])
                    ) : (
                      <p>{item.red_nombre}</p>
                    )}
                  </Link>
                ))}
              </div>
              <h2>Sobre mí 😊</h2>
              <p className="text-justify text-white">
                ¡Hola! Soy Doménica Vintimilla, tengo 25 años y soy Ingeniera en
                Ciencias de la Computación 💻. Me apasiona el desarrollo de
                software y llevo más de 3 años creando soluciones tanto en
                backend como en frontend. 👩‍💻 He trabajado con tecnologías como
                Java (Spring Boot), NestJS, Node.js, React, Next.js, Python y
                Angular. Me encanta trabajar con bases de datos (PostgreSQL,
                MongoDB, MySQL) y soy fan de escribir consultas SQL bien
                optimizadas. Aunque me he enfocado más en el backend,
                últimamente me he metido de lleno en el mundo del frontend,
                sobre todo con React. Me gusta crear cosas que realmente
                funcionen y sean útiles. 🛠️ Trabajo con Git, en equipos ágiles
                usando Scrum, y siempre busco aprender algo nuevo. Fuera del
                código, me encanta la lectura, el cine y seguir aprendiendo
                cosas que me reten. Estoy emocionada por los próximos pasos que
                me esperan en este camino 🚀.
              </p>
            </div>
          </div>
          {/* <h2 className="text-2xl font-bold text-center">Mis proyectos</h2> */}
          <div className="flex flex-row items-center justify-center text-center p-2">
            <div className="flex flex-col items-center justify-center">
              <h2 className="">Proyectos Frontend</h2>
              <Proyects />
            </div>

            <div className="flex flex-col items-center justify-center">
              <h2>Proyectos Backend</h2>
              <Proyects />
            </div>
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
