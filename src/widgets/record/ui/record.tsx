// widgets/record/index.tsx
"use client";

import { TitleSection } from "@/shared/ui/title-section";
import "./record.scss";
import { RecordList } from "@/shared/ui/record-list";
import { useState } from "react";

interface RecordProps {
  onTimeSelect?: (date: string, time: string) => void; // Сделали опциональным для обратной совместимости
}

export function Record({ onTimeSelect }: RecordProps) {
  const [selectedTime, setSelectedTime] = useState<{ date: string; time: string } | null>(null);

  const handleTimeSelect = (date: string, time: string) => {
    setSelectedTime({ date, time });
    // Вызываем переданный обработчик, если он есть
    if (onTimeSelect) {
      onTimeSelect(date, time);
    }
  };

  const dates = [
    "27 апреля, Воскресенье",
    "28 апреля, Понедельник", 
    "29 апреля, Вторник",
    "30 апреля, Среда",
    "1 мая, Четверг",
    "2 мая, Пятница",
    "3 мая, Суббота"
  ];

  const deadlines = [
    ["10:00", "11:30", "13:00", "14:30", "16:00", "17:30", "19:00", "20:30", "22:00", "23:30"],
    ["10:00", "11:30", "13:00", "14:30", "16:00", "17:30", "19:00", "20:30", "22:00", "23:30"],
    ["10:00", "11:30", "13:00", "14:30", "16:00", "17:30", "19:00", "20:30", "22:00", "23:30", "01:00"],
    ["10:00", "11:30", "13:00", "14:30", "16:00", "17:30", "19:00", "20:30", "22:00", "23:30", "01:00"],
    ["10:00", "11:30", "13:00", "14:30", "16:00", "17:30", "19:00", "20:30", "22:00", "23:30", "01:00"],
    ["10:00", "11:30", "13:00", "14:30", "16:00", "17:30", "19:00", "20:30", "22:00", "23:30"],
    ["10:00", "11:30", "13:00", "14:30", "16:00", "17:30", "19:00", "20:30", "22:00", "23:30"]
  ];

  return (
    <section className="record">
      <TitleSection classTitle="record__title" text="Запись" />
      
      {dates.map((date, index) => (
        <RecordList 
          key={index}
          deadlines={deadlines[index]} 
          date={date}
          onTimeSelect={handleTimeSelect}
          selectedTime={selectedTime?.date === date ? selectedTime.time : undefined}
        />
      ))}
    </section>
  );
}