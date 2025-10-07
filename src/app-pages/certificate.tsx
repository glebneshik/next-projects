"use client"
import { RedButton } from "@/shared/ui/RedButton/RedButton";
import { TitleSection } from "@/shared/ui/title-section";
import Image from "next/image";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import { SliderConfig } from "@/shared/config/slider";
import { useRef, useState, useEffect } from "react";

import Link from "next/link";

interface SlideItem {
    id: number;
    urlImage: string;
}

export function CertificatePage() {
    const swiperRef = useRef<SwiperType | null>(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 1024);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => {
            window.removeEventListener('resize', checkMobile);
        };
    }, []);

    return (
        <div className="certificate">
            <div className="container">
                <div className="certificate__navigation">
                    <Link href="/" className="certificate__navigation-link">
                        Главная
                    </Link>
                    <span className="certificate__navigation-separator">›</span>
                    <span className="certificate__navigation-current">Сертификаты</span>
                </div>

                <TitleSection classTitle={"certificate__title"} text={"сертификаты"} />

                <div className="certificate__wrapper">
                    <div className="certificate__wrapper_info">
                        <div className="certificate__wrapper_info-block">
                            <h5 className="certificate__wrapper_info-block_title">Цена:</h5>
                            <p className="certificate__wrapper_info-block_descr">от 1000 руб</p>
                        </div>
                        <div className="certificate__wrapper_info-block">
                            <h5 className="certificate__wrapper_info-block_title">Уровень страха:</h5>
                            <p className="certificate__wrapper_info-block_descr">3 месяца с момента покупки</p>
                        </div>
                        <div className="certificate__wrapper_info-block">
                            <h5 className="certificate__wrapper_info-block_title">Дизайн:</h5>
                            <p className="certificate__wrapper_info-block_descr">На выбор разные варианты дизайна</p>
                            <Image className="certificate__wrapper_info-block_quesition" src={"/icons/uestion.svg"} width={30} height={30} alt="Вопрос"></Image>
                        </div>

                        <ul className="certificate__wrapper_info-list">
                            <h5 className="certificate__wrapper_info-list_title">Как получить:</h5>
                            <li className="certificate__wrapper_info-list_item">В электронном виде</li>
                            <li className="certificate__wrapper_info-list_item">В запечатанном конверте с фирменной печатью
                            </li>
                            <li className="certificate__wrapper_info-list_item">Лично в руки от любимого персонажа
                            </li>
                            <li className="certificate__wrapper_info-list_item">Доставка на дом
                            </li>
                        </ul>

                        <p className="certificate__wrapper_info-text">
                            Думаете, как порадовать близких или коллег по работе? Сертификат от Isolation - это оригинальный подарок в виде бурных эмоций и ярких впечатлений! Такой сюрприз точно не оставит ваших друзей равнодушными.
                        </p>
                        <RedButton
                            altImage={"заказать сертификат"}
                            classButton={"certificate__wrapper_info-btn"}
                            textButton={"заказать сертификат"}
                        />
                    </div>
                    <div className="certificate__wrapper_slider">
                        {!isMobile && (
                            <>
                                <div
                                    className="certificate__wrapper_slider-arrow left"
                                    onClick={() => swiperRef.current?.slidePrev()}
                                    role="button"
                                    tabIndex={0}
                                    onKeyDown={(e: React.KeyboardEvent) => {
                                        if (e.key === 'Enter' || e.key === ' ') {
                                            swiperRef.current?.slidePrev();
                                        }
                                    }}
                                >
                                    <Image src={"/icons/left-arrow.svg"} width={20} height={20} alt="стрелка влево" />
                                </div>
                                <div
                                    className="certificate__wrapper_slider-arrow right"
                                    onClick={() => swiperRef.current?.slideNext()}
                                    role="button"
                                    tabIndex={0}
                                    onKeyDown={(e: React.KeyboardEvent) => {
                                        if (e.key === 'Enter' || e.key === ' ') {
                                            swiperRef.current?.slideNext();
                                        }
                                    }}
                                >
                                    <Image src={"/icons/right-arrow.svg"} width={20} height={20} alt="стрелка вправо" />
                                </div>
                            </>
                        )}
                        <Swiper
                            className="certificate__wrapper_slider-scroll"
                            slidesPerView={1}
                            spaceBetween={20}
                            centeredSlides={true}
                            allowTouchMove={true}
                            simulateTouch={true}
                            loop={true}
                            onSwiper={(swiper: SwiperType) => {
                                swiperRef.current = swiper;
                            }}
                        >
                            {SliderConfig.map((slide: SlideItem) => (
                                <SwiperSlide key={slide.id}>
                                    <div className="slide-image-container">
                                        <Image
                                            width={900}
                                            height={900}
                                            src={slide.urlImage}
                                            alt={`Сертификат ${slide.id}`}
                                            priority={slide.id === 1}
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
}