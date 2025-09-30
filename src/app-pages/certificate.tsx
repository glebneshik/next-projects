import { RedButton } from "@/shared/ui/RedButton/RedButton";
import { TitleSection } from "@/shared/ui/title-section";
import Image from "next/image";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { SliderConfig } from "@/shared/config/slider";


export function CertificatePage() {
    return (
        <div className="certificate">
            <div className="container">
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
                        <RedButton altImage={"заказать сертификат"} classButton={"certificate__wrapper_info-btn"} textButton={"заказать сертификат"} />
                    </div>
                    <div className="certificate__wrapper_slider">
                        <Swiper
                            className="certificate__wrapper_slider-scroll"
                            slidesPerView={1}
                            spaceBetween={0}
                            centeredSlides={true}

                            allowTouchMove={true}
                            simulateTouch={true}
                        >

                            {
                                SliderConfig.map((slide) => {
                                    return (
                                        <SwiperSlide key={slide.id}>
                                            <Image width={900} height={900} src={slide.urlImage} alt="" />
                                        </SwiperSlide>

                                    )
                                })
                            }
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}