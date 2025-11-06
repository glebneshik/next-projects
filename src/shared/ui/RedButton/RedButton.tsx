import Image from "next/image"
import Link from "next/link";
import "./RedButton.scss";

export function RedButton(
    {
        altImage,
        classButton,
        textButton,
        href
    }:
        {
            altImage: string,
            classButton: string,
            textButton: string,
            href?: string
        }
) {
    // Если href не передан, рендерим обычную кнопку
    if (!href) {
        return (
            <button className={`button-red ${classButton}`}>
                <p className="button-red_text">{textButton}</p>
            </button>
        )
    }

    // Если href передан, рендерим ссылку
    return (
        <Link href={href} className={`button-red ${classButton}`}>
            <p className="button-red_text">{textButton}</p>
        </Link>
    )
}