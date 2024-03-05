"use client";

//styles
import "./SlideAboutMe.scss";

import Image from "next/image";

//slide
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

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
            <div className="section-card-text">
              <div className="section-card-text-title">
                <FontAwesomeIcon
                  icon={faGraduationCap}
                  style={{ fontSize: "160%" }}
                />
                <h3>Educação</h3>
              </div>
              <p>
                Iniciei meus estudos na escola Sesi Itapetininga, com início em
                2009 e conclusão em 2021, e desde de sempre fui fascinado por
                tecnologia, então decidi fazer cursos na internet sobre
                programação e acabei me apaixonando mais pela área, fazendo com
                que eu começasse minha graduação em engenharia de softaware na
                uninter para me tornar um profissional com exelencia e
                capacitado na área.
              </p>
            </div>
            <div className="img-card-container">
              <Image
                src="/sesi-logo.jpg"
                alt="Logo do sesi"
                width={150}
                height={100}
                priority
                className="logo"
              />
              <Image
                src="/logo-uninter.png"
                alt="Logo uninter"
                width={150}
                height={100}
                style={{ background: "white" }}
                priority
                className="logo"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div id="card-two">
            <div className="section-card-text">
              <div className="section-card-text-title">
                <h3>Exeperiência Profissional</h3>
              </div>
              <p>
                Infelizmente na área da tecnologia só pude adiquirir experiência
                de projetos pessoais e acadêmicos, vou colocar alguns deles
                aqui. Porém já trabalhei em uma grande indústria, Universal
                Chemical, onde pude adquirir várias soft skills como
                comunicação, tomada de decisões, flexibilidade, gestão de tempo
                e trabalho em grupo que era fundamental para o cumprimento de
                metas, qualidade do produto e nossa própria segurança.
              </p>
            </div>
            <div className="img-card-container">
              <Image
                src="/logo-universal-chemical.jpg"
                alt="Foto de perfil"
                width={250}
                height={100}
                style={{ background: "white" }}
                priority
                className=""
              />
            </div>
          </div>
        </SwiperSlide>
      </div>
    </Swiper>
  );
};

export default SlideAboutMe;
