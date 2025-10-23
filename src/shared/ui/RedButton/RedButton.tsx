import Image from "next/image"
import Link from "next/link";
import "./RedButton.scss";

export function RedButton(
    {
        altImage,
        classButton,
        textButton
    }:
        {
            altImage: string,
            classButton: string,
            textButton: string
        }
) {
    return (
        <Link href={'#quests'} className={`button-red ${classButton}`}>
            <p className="button-red_text">{textButton}</p>
        </Link>
    )
}