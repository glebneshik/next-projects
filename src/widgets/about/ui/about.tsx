"use client"

import Image from "next/image"
import Link from "next/link";

import "./about.scss"
import { TitleSection } from "@/shared/ui/title-section";
import { ScrollTeam } from "@/shared/config/scrollTeam";
import { useEffect, useState } from "react";
import axios from "axios";
import { AboutSlider } from "@/widgets/aboutSlider/about-slider";

interface SliderItem {
    id: number;
    urlImage: string;
}

interface AboutData {
    id: string;
    title_section_one?: string;
    title_section_two?: string;
    descr_section_one?: string;
    descr_section_two?: string;
    text_link?: string;
    slider_scroll?: SliderItem[];
}

export function About() {
    const [info, setInfo] = useState<AboutData[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        GetInfo();
    }, []);

    const FetchInfo = async (): Promise<AboutData[]> => {
        try {
            const { data } = await axios.get<AboutData[]>("https://0275d3dd1dabf767.mokky.dev/about-section");
            return data;
        } catch (err) {
            console.log(err);
            return [];
        }
    };

    const GetInfo = async (): Promise<void> => {
        setLoading(true);
        const data = await FetchInfo();
        setInfo(data);
        setLoading(false);
    };

    const titleData = info.find((item: AboutData) => item.id === "Title");
    const descrData = info.find((item: AboutData) => item.id === "Descr");
    const sliderData = info.find((item: AboutData) => item.id === "Slider");

    if (loading) {
        return <div className="about">Загрузка...</div>;
    }

    return (
        <>
            <section className="about">
                {titleData && (
                    <div className="about__title">
                        <TitleSection
                            classTitle="about__title_one"
                            text={titleData.title_section_one || ""}
                        />
                        <TitleSection
                            classTitle="about__title_two"
                            text={titleData.title_section_two || ""}
                        />
                    </div>
                )}

                {descrData && (
                    <div className="about__wrapper">
                        <div className="about__wrapper_link">
                            <h3 className="about__wrapper_link-descr">
                                {descrData.text_link}
                            </h3>
                            <Link href="https://vk.com/dubna_isolation" className="about__wrapper_link-img">
                                <Image
                                    src="/images/link-about-img.png"
                                    alt="Наше фото"
                                    width={55}
                                    height={80}
                                />
                            </Link>
                        </div>
                        <div className="about__wrapper_text">
                            <p className="about__wrapper_text-item">
                                {descrData.descr_section_one}
                            </p>
                            <p className="about__wrapper_text-item">
                                {descrData.descr_section_two}
                            </p>
                        </div>
                    </div>
                )}
            </section>

            {/* Отдельная секция слайдера без паддингов */}
            <AboutSlider sliderData={sliderData} fallbackData={ScrollTeam} />
        </>
    )
}