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
            <Image layout="fill" src="/images/SelectQuestBtn.png" alt={altImage} className="button-red_background" />
            <p className="button-red_text">{textButton}</p>
        </button>
    )
}