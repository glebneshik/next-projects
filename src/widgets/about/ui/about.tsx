"use client"

import Image from "next/image"
import Link from "next/link";
import { Autoplay, FreeMode } from 'swiper/modules';

import "./about.scss"
import { TitleSection } from "@/shared/ui/title-section";
import { ScrollTeam } from "@/shared/config/scrollTeam";
import { Swiper, SwiperSlide } from "swiper/react";

export function About() {
    return (
        <section className="about">
            <div className="container">
                <div className="about__title">
                    <TitleSection classTitle="about__title_one" text="ISOLATION – это то, что перенесет" />
                    <TitleSection classTitle="about__title_two" text="вас в абсолютно новый мир" />
                </div>

                <div className="about__wrapper">
                    <div className="about__wrapper_link">
                        <h3 className="about__wrapper_link-descr">
                            присоединяйтесь к нашей группе vk
                        </h3>
                        {/* Cсылка на ВК */}
                        <Link href="/" className="about__wrapper_link-img">
                            <Image src="/images/link-about-img.png" alt="Наше фото" width={55} height={80} />
                        </Link>
                    </div>
                    <div className="about__wrapper_text">
                        <p className="about__wrapper_text-item">
                            Хотели бы почувствовать себя главным героем фильма? Перенестись              из современной реальности в череду захватывающих приключений                         и таинственных историй? В Isolation вы сможете почувствовать себя искателем сокровищ, бесстрашным авантюристом, харизматичным детективом или же жертвой в чьей-то зловещей игре! У нас Вы получите        те самые эмоции, которые испытываете при просмотре любимого фильма,      но уже лично примерив на себе костюмы героев!
                        </p>
                        <p className="about__wrapper_text-item">
                            Мы далеко не единственные, у кого возникла идея создания квестов в реальности, но мы делаем все, чтобы вывести их на совершенно новый уровень и дарить людям те эмоции, которые они точно смогут назвать самыми яркими в своей жизни!
                        </p>
                    </div>

                </div>


            </div>
            <div className="about__scroll">
                <Swiper
                    className="about__scroll_container"
                    modules={[Autoplay, FreeMode]} // Добавьте FreeMode модуль
                    slidesPerView={"auto"}

                    loop={false}
                    freeMode={{
                        enabled: true,
                        momentum: false, // Отключаем инерцию для плавности
                    }}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: false,
                    }}
                    speed={8000} // Увеличьте скорость для более плавного движения
                    grabCursor={false}
                    allowTouchMove={false}
                    resistance={false}
                    resistanceRatio={0}
                >
                    {ScrollTeam.map((item) => (
                        <SwiperSlide
                            key={item.id}
                            style={{
                                width: '500px', // Фиксированная ширина слайда
                                flexShrink: 0
                            }}
                        >
                            <Image
                                className="about__scroll_img"
                                width={500}
                                height={350}
                                src={item.urlImage}
                                alt="наши команды"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section >
    )
}