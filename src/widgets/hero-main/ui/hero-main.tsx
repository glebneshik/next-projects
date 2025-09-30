
import { RedButton } from "@/shared/ui/RedButton/RedButton";
import "./hero-main.scss";

export function HeroMain() {
  return (
    <section className="hero">
      <div className="hero__wrapper">
        <p className="hero__wrapper_about">Прекрасный зимний вечер… Что может быть лучше, чем провести время с друзьями? Может, сходить в местный лабиринт страха, чтобы пощекотать нервы и пораскинуть мозгами? Все шло по плану, </p>
        <RedButton classButton="hero__wrapper_select" textButton="выбрать квест" altImage="выбрать квест" />
      </div>
    </section>
  );
}
