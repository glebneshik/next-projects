import Image from "next/image";

interface QuestBlockProps {
    location: string;
    price: number;
    maxPeople: string;
    level?: number;
}

export function QuestBlock({ location, price, maxPeople, level }: QuestBlockProps) {
    return (
        <div className="quest__info_block">
            <div className="quest__info_block-item">
                <h5 className="quest__info_block-item_title">Время прохождения:</h5>
                <p className="quest__info_block-item_descr">60 минут</p>
            </div>
            <div className="quest__info_block-item">
                <h5 className="quest__info_block-item_title">Кол-во участников:</h5>
                <p className="quest__info_block-item_descr">{maxPeople}</p>
            </div>
            <div className="quest__info_block-item">
                <h5 className="quest__info_block-item_title">Цена:</h5>
                <p className="quest__info_block-item_descr">от {price} руб</p>
                <Image src="/icons/questionIcon.svg" width={20} height={20} alt="подробнее" />
            </div>
            <div className="quest__info_block-item">
                <h5 className="quest__info_block-item_title">Уровень страха:</h5>
                <p className="quest__info_block-item_descr">4/5</p>
                <Image src="/icons/questionIcon.svg" width={20} height={20} alt="подробнее" />
            </div>
            <div className="quest__info_block-item">
                <h5 className="quest__info_block-item_title">Адрес:</h5>
                <p className="quest__info_block-item_descr">{location}</p>
            </div>
            <div className="quest__info_block-item">
                <h5 className="quest__info_block-item_title">Версии:</h5>
                <p className="quest__info_block-item_descr">Есть не страшная</p>
                <Image src="/icons/questionIcon.svg" width={20} height={20} alt="подробнее" />
            </div>
        </div>
    )
}