"use client";

import { QuestPage } from "@/app-pages/quests";
import "./index.scss";
import { useEffect, useState } from "react";
import { CardsState } from "@/widgets/quests/ui/quests";
import axios from "axios";

export default function Quest({ params }: { params: { slug: string } }) {
    const { slug } = params;
    const [quest, setQuest] = useState<CardsState | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        GetQuest();
    }, [slug]);

    const FetchQuest = async () => {
        try {
            const { data } = await axios.get(`http://localhost:8000/card/${slug}`);
            return data;
        } catch (err) {
            console.log(err);
            return null;
        }
    };

    const GetQuest = async () => {
        setLoading(true);
        const data = await FetchQuest();
        setQuest(data);
        setLoading(false);
    };

    if (loading) {
        return <div>loading...</div>;
    }

    if (!quest) {
        return <div>Квест не найден</div>;
    }

    return (
        <QuestPage quest={quest} />
    );
}