// shared/ui/record-list/index.tsx
import "./index.scss";

interface TimeSlot {
  time: string;
  available: boolean;
}

interface RecordListProps {
  timeSlots: TimeSlot[];
  date: string;
  onTimeSelect: (date: string, time: string, available: boolean) => void;
  selectedTime: { date: string; time: string } | null;
}

export function RecordList({ timeSlots, date, onTimeSelect, selectedTime }: RecordListProps) {
  const isTimeSelected = (time: string) => {
    return selectedTime?.date === date && selectedTime?.time === time;
  };

  return (
    <ul className="record__list">
      <li className="record__list_date">{date}</li>
      {timeSlots.map((timeSlot, i) => (
        <li 
          key={i} 
          className={`
            record__list_item 
            ${!timeSlot.available ? 'record__list_item--unavailable' : ''}
            ${isTimeSelected(timeSlot.time) && timeSlot.available ? 'record__list_item--selected' : ''}
          `}
          onClick={() => onTimeSelect(date, timeSlot.time, timeSlot.available)}
        >
          {timeSlot.time}
        </li>
      ))}
    </ul>
  );
}