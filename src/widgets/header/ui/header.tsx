"use client"
import { Menu } from "@/shared/ui/menu";
import { Logo } from "@/shared/logo";

import "./header.scss";
import { navigations } from "@/shared/config/navigation";
import Image from "next/image";
import { useState } from "react";
export function Header() {
  const [isMenu, setIsMenu] = useState<boolean>(false)

  const isToogeMenu = () => {
    setIsMenu(!isMenu)
  }

  return (
    <>
      <header className="header">
        <div className="header__logo">
          <Logo />
        </div>

        <nav className={`header__nav ${isMenu ? "active" : ""}`}>
          <Menu elementClass="header" navigations={navigations} />
          <div className="header__close">
            <Image src={'/icons/hamburger-close.svg'} width={30} height={30} alt="закрыть меню" onClick={isToogeMenu}></Image>
          </div>


        </nav>
        {
          isMenu ? <div className="header__overlay"></div> : null
        }
        <div className="header__open">
          <Image src={'/icons/hamburger-open.svg'} width={30} height={50} alt="открыть меню" onClick={isToogeMenu}></Image>
        </div>
      </header>
    </>
  );
}
