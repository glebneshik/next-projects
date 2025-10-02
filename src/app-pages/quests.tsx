import { QuestBlock } from "@/shared/ui/quest-pages/index";
import { QuestNavigate } from "@/shared/ui/quest-pages/index";
import { QuestText } from "@/shared/ui/quest-pages/index";
import { QuestTitle } from "@/shared/ui/quest-pages/index";
import { QuestImages } from "@/shared/ui/quest-pages/questImages";
import { Booking } from "@/widgets/booking";
import { Record } from "@/widgets/record";
import { CardsState } from "@/widgets/quests/ui/quests";

interface QuestPageProps {
    quest: CardsState;
}

export function QuestPage({ quest }: QuestPageProps) {
    return (
        <div className="quest">
            <QuestNavigate questName={quest.nameQuest} />
            <div className="quest__wrapper">
                <div className="quest__info">
                    <QuestTitle title={quest.nameQuest} />
                    <QuestBlock
                        location={quest.locationQuest}
                        price={quest.priceQuest}
                        maxPeople={quest.maxPeople}
                        level={quest.level}
                    />
                    <QuestText description={quest.descrQuest} />
                </div>

                <QuestImages />
            </div>

            <Record />
            <Booking />
        </div>
    );
}