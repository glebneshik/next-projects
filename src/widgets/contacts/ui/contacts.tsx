
import { TitleSection } from "@/shared/ui/title-section"
import "./contacts.scss"
import { LocationBlock } from "@/shared/ui/location-block"
import { SortQuest } from "@/shared/ui/sort-quest"

export function Contacts() {
    return (
        <section className="contacts" id="contacts">
            <div className="container">
                <div className="contacts__wrapper">
                    <div className="contacts__text">
                        <TitleSection classTitle="contacts__text_title" text="контакты" />
                        <h3 className="contacts__text_number">+7 (925) 067-40 23</h3>
                        <h4 className="contacts__text_email">isolation-quest@mail.ru</h4>
                        <div className="contacts__text_locations">
                            <LocationBlock
                                classLocationBlock="contacts__text_locations-title"
                                classLocationText="contacts__text_locations-title_text"
                                valueLocation="г. Дубна, ул. Промышленная 4а"
                            />
                            <ul className="contacts__text_locations-list">
                                <SortQuest array={["Искатели могил", "Проклятие монахини", "Ужасающий"]} />
                            </ul>
                        </div>
                        <div className="contacts__text_locations">
                            <LocationBlock
                                classLocationBlock="contacts__text_locations-title"
                                classLocationText="contacts__text_locations-title_text"
                                valueLocation="г. Дубна, ул. Боголюбова 44а к2"
                            />
                            <ul className="contacts__text_locations-list">
                                <SortQuest array={["Ужасы заброшенного приюта", "Чумной доктор"]} />
                            </ul>
                        </div>
                    </div>
                    <div className="contacts__map">
                        <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A16f9c18041511b810d8c9c401bdf91fabdd7390f50c39e4242c55b760c7b9362&amp;source=constructor" width="903" height="667" frameBorder="0"></iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}