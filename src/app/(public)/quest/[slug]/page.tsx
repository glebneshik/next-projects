"use client";

import { QuestPage } from "@/app-pages/quests";
import "./index.scss";
import { useEffect, useState } from "react";
import { CardsState } from "@/widgets/quests/ui/quests";
import axios from "axios";

const API_BASE_URL = "https://68debd9a898434f41355def8.mockapi.io/products/items";

export default function Quest({ params }: { params: { slug: string } }) {
    const { slug } = params;
    const [quest, setQuest] = useState<CardsState | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        GetQuest();
    }, [slug]);

    const FetchQuest = async () => {
        try {
            console.log("Fetching all quests from API...");
            
            const response = await axios.get(API_BASE_URL);
            const allQuests = response.data;
            
            console.log("All quests received:", allQuests);
            
            const foundQuest = allQuests.find((quest: any) => 
                quest.id === parseInt(slug) || 
                quest.id.toString() === slug ||
                quest.nameQuest?.toLowerCase().replace(/\s+/g, '-') === slug.toLowerCase() ||
                quest.nameQuest?.toLowerCase() === decodeURIComponent(slug).toLowerCase()
            );
            
            console.log("Found quest:", foundQuest);
            console.log("Looking for:", slug);
            
            return foundQuest || null;
        } catch (err: any) {
            console.error("API error:", err);
            setError(`Ошибка загрузки: ${err.response?.status || err.message}`);
            return null;
        }
    };

    const GetQuest = async () => {
        setLoading(true);
        setError(null);
        
        const data = await FetchQuest();
        setQuest(data);
        setLoading(false);
    };

    if (loading) {
        return <div className="loading">Загрузка...</div>;
    }

    if (error) {
        return (
            <div className="error">
                <p>{error}</p>
                <button onClick={GetQuest}>Попробовать снова</button>
            </div>
        );
    }

    if (!quest) {
        return (
            <div className="not-found">
                <p>Квест "{slug}" не найден</p>
                <button onClick={GetQuest}>Попробовать снова</button>
            </div>
        );
    }

    return <QuestPage quest={quest} />;
}