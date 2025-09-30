
import { Menu } from "@/shared/ui/menu";
import { Logo } from "@/shared/logo";

import "./header.scss";
import { navigations } from "@/shared/config/navigation";
import Image from "next/image";
export function Header() {
  return (
    <>
      <header className="header">
        <div className="header__logo">
          <Logo />
        </div>

        <nav className="header__nav">
          <Menu elementClass="header" navigations={navigations} />
          <div className="hamburger__close">
            <Image src={'/icons/hamburger-close.svg'} width={30} height={30} alt="открыть меню"></Image>
          </div>
        </nav>

        {/* <div className="header__hamburger">
          <Image src={'/icons/hamburger-open.svg'} width={30} height={50} alt="открыть меню"></Image>
        </div> */}
      </header>
    </>
  );
}
