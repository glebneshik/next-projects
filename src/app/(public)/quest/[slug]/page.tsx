import "./index.scss";
import { QuestPage } from "@/app-pages/quests";
import { CardsState } from "@/widgets/quests/ui/quests";
import axios from "axios";

const API_BASE_URL = "https://0275d3dd1dabf767.mokky.dev/card-main";

interface PageProps {
  params: Promise<{ slug: string }>;
}

async function fetchQuest(slug: string): Promise<CardsState | null> {
  try {
    const response = await axios.get(API_BASE_URL);
    const allQuests = response.data;
    
    const foundQuest = allQuests.find((quest: any) => 
      quest.id === parseInt(slug) || 
      quest.id.toString() === slug ||
      quest.nameQuest?.toLowerCase().replace(/\s+/g, '-') === slug.toLowerCase() ||
      quest.nameQuest?.toLowerCase() === decodeURIComponent(slug).toLowerCase()
    );
    
    return foundQuest || null;
  } catch (error) {
    console.error("API error:", error);
    return null;
  }
}

export default async function Quest({ params }: PageProps) {
  const { slug } = await params;
  
  const quest = await fetchQuest(slug);

  if (!quest) {
    return (
      <div className="not-found">
        {/* <p>Квест "{slug}" не найден</p> */}
      </div>
    );
  }
  const transformedQuest = {
    ...quest,
    location: quest.address || quest.location,
    price: typeof quest.price === 'object' ? quest.price.starting_from : quest.price,
    maxPeople: quest.participants ? `${quest.participants.min}-${quest.participants.max}` : quest.maxPeople,
    level: quest.fear_level?.value || quest.level
  };

  return <QuestPage quest={transformedQuest} />;
}