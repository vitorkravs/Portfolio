"use client";

//styles
import "./SlideAboutMe.scss";

import Image from "next/image";

//slide
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SlideAboutMe = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation={true}
      modules={[Navigation, Pagination]}
      loop={true}
      pagination={{
        clickable: true,
      }}
    >
      <div id="cards-container">
        <SwiperSlide>
          <div id="card-one">
            <h3>Educação</h3>
            <p>
              Iniciei meus estudos na escola Sesi Itapetininga, com início em
              2009 e conclusão em 2021, e desde de sempre fui fascinado por
              tecnologia, então decidi fazer cursos na internet sobre
              programação e acabei me apaixonando mais pela área, fazendo com
              que eu começasse minha graduação em engenharia de softaware na
              uninter para me tornar um profissional com exelencia e capacitado
              na área.
            </p>
            <div id="img-card-container">
              <Image
                src="/sesi-logo.jpg"
                alt="Logo do sesi"
                width={150}
                height={100}
              />
              <Image
                src="/logo-uninter.png"
                alt="Logo uninter"
                width={150}
                height={100}
                style={{ background: "white" }}
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div id="card-two">
            <h3>Exeperiências Profissional</h3>
            <p>
              Infelizmente na área da tecnologia só pude adiquirir experiência
              de projetos pessoais e acadêmicos, porém já trabalhei em uma
              grande indústria, Universal Chemical, onde pude adquirir várias
              soft skills como comunicação, tomada de decisões, flexibilidade,
              gestão de tempo e trabalho em grupo que era fundamental para o
              cumprimento de metas, qualidade do produto e nossa própria
              segurança.
            </p>
            <div id="img-card-container">
              <Image
                src="/logo-universal-chemical.jpg"
                alt="Foto de perfil"
                width={250}
                height={100}
                style={{ background: "white" }}
              />
            </div>
          </div>
        </SwiperSlide>
      </div>
    </Swiper>
  );
};

export default SlideAboutMe;
