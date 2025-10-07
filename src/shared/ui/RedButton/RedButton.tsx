import Image from "next/image"
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
        <button className={`button-red ${classButton}`}>
            <p className="button-red_text">{textButton}</p>
        </button>
    )
}