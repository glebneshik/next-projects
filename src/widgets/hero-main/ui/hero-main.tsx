"use client"

import { RedButton } from "@/shared/ui/RedButton/RedButton";
import "./hero-main.scss";
import { useEffect, useState } from "react";
import axios from "axios";

// Типы для данных из API
interface HeroInfo {
  id: number;
  descr_section: string;
}

export function HeroMain() {
  const [info, setInfo] = useState<HeroInfo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    GetInfo();
  }, []);

  const FetchInfo = async (): Promise<HeroInfo[]> => {
    try {
      const { data } = await axios.get<HeroInfo[]>("https://c30b6adca3b2bfd4.mokky.dev/hero-section");
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

  if (loading) {
    return (
      <section className="hero">
        <div className="hero__wrapper">
          <p className="hero__wrapper_about">Загрузка...</p>
          <RedButton classButton="hero__wrapper_select" textButton="выбрать квест" altImage="выбрать квест" />
        </div>
      </section>
    );
  }

  return (
    <section className="hero">
      <div className="hero__wrapper">
        {info.map((item) => (
          <p key={item.id} className="hero__wrapper_about">{item.descr_section}</p>
        ))}
        <RedButton classButton="hero__wrapper_select" textButton="выбрать квест" altImage="выбрать квест" />
      </div>
    </section>
  );
}