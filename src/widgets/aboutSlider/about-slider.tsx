"use client"

import { useState } from "react";
import Image from "next/image";
import { Autoplay, FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";

interface SliderItem {
    id: number;
    urlImage: string;
}

interface AboutData {
    id: string;
    slider_scroll?: SliderItem[];
}

interface AboutSliderProps {
    sliderData?: AboutData;
    fallbackData: SliderItem[];
}

export function AboutSlider({ sliderData, fallbackData }: AboutSliderProps) {
    const [isHovered, setIsHovered] = useState(false);

    const sliderItems = sliderData?.slider_scroll || fallbackData;

    return (
        <section className="about-slider">
            <div className="about-slider__container">
                <Swiper
                    className="about-slider__swiper"
                    modules={[Autoplay, FreeMode]}
                    slidesPerView={"auto"}
                    loop={true}
                    freeMode={{
                        enabled: true,
                        momentum: true,
                        sticky: false,
                        minimumVelocity: 0.01,
                    }}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: false,
                        stopOnLastSlide: false,
                    }}
                    speed={8000}
                    grabCursor={true}
                    allowTouchMove={true}
                    resistance={true}
                    resistanceRatio={0.5}
                    touchRatio={1}
                    touchAngle={45}
                    shortSwipes={true}
                    longSwipes={true}
                    longSwipesRatio={0.1}
                    longSwipesMs={300}
                    followFinger={true}
                    threshold={5}
                    onTouchStart={() => setIsHovered(true)}
                    onTouchEnd={() => setIsHovered(false)}
                    onSlideChangeTransitionEnd={() => setIsHovered(false)}
                    onAutoplay={() => {
                        // Автоплей логика
                    }}
                >
                    {sliderItems.map((item: SliderItem) => (
                        <SwiperSlide
                            key={item.id}
                            className="about-slider__slide"
                            style={{
                                width: '500px',
                                flexShrink: 0,
                                cursor: 'grab'
                            }}
                            onMouseDown={(e) => {
                                e.preventDefault();
                                setIsHovered(true);
                            }}
                            onMouseUp={() => setIsHovered(false)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <Image
                                className="about-slider__image"
                                width={500}
                                height={350}
                                src={item.urlImage}
                                alt="наши команды"
                                style={{
                                    pointerEvents: 'none' 
                                }}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}