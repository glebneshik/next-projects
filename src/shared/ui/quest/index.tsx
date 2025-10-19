import { DubnaIcon } from "@/shared/DubnaIcon/DubnaIcon";
import { KeyIcon } from "../svg/CardIcons/KeyIcon";
import { PersoneIcon } from "../svg/CardIcons/PersonIcon";
import { ScullIcon } from "../svg/CardIcons/ScullIcon";
import Image from "next/image";
import "./index.scss";
import { RedButton } from "../RedButton/RedButton";
import { KeyDisableIcon } from "../svg/CardIcons/KeyDisableIcon";
import Link from "next/link";

export function Quest({
    id,
    nameQuest,
    descrQuest,
    locationQuest,
    priceQuest,
    maxPeople,
    imageUrl,
    keys,
    complexity // Получаем сложность
}: {
    id: number
    nameQuest: string;
    descrQuest: string;
    locationQuest: string;
    priceQuest: number;
    maxPeople: string;
    complexity: number; // Обязательное поле сложности
    imageUrl: string;
    keys: boolean[];
}) {
    
    // Функция для рендеринга черепков в зависимости от сложности
    const renderScullIcons = () => {
        return Array.from({ length: 5 }, (_, index) => (
            <ScullIcon 
                key={index} 
                className={index < complexity ? "quests__item_scull-active" : "quests__item_scull-inactive"}
            />
        ));
    };

    return (
        <Link href={`/quest/${id}`} className="quests__item">
            <div className="quests__item_img">
                <Image width={300} height={300} src={imageUrl} alt={nameQuest} />
            </div>

            <h4 className="quests__item_title">{nameQuest}</h4>
            <p className="quests__item_descr">{descrQuest}</p>
            
            <div className="quests__item_line-container">
                <hr className="quests__item_line" />
            </div>

            <div className="quests__item_settings">
                <div className="quests__item_settings-count">
                    <PersoneIcon />
                    <p className="quests__item_settings-count_text">{maxPeople}</p>
                </div>

                <div className="quests__item_settings-complexity">
                    {renderScullIcons()}
                </div>

                <div className="quests__item_settings-keys">
                    {keys.map((item, i) => (
                        <div key={i}>
                            {item ? <KeyIcon /> : <KeyDisableIcon />}
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="quests__item_locate">
                <DubnaIcon />
                <p className="quests__item_locate-text">{locationQuest}</p>
            </div>

            <div className="quests__item_price">
                <p className="quests__item_price-value">от {priceQuest} ₽</p>
                <RedButton classButton="quests__item_price-buy" textButton="забронировать" altImage="забронировать" />
            </div>
        </Link>
    )
}