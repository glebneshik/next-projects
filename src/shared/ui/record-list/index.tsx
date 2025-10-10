import "./index.scss";

interface RecordListProps {
  deadlines: string[];
  date: string;
  onTimeSelect: (date: string, time: string) => void;
  selectedTime?: string;
}

export function RecordList({ deadlines, date, onTimeSelect, selectedTime }: RecordListProps) {
  return (
    <ul className="record__list">
      <li className="record__list_date">{date}</li>
      {deadlines.map((deadline, i) => (
        <li 
          key={i} 
          className={`record__list_item ${selectedTime === deadline ? 'record__list_item--selected' : ''}`}
          onClick={() => onTimeSelect(date, deadline)}
        >
          {deadline}
        </li>
      ))}
    </ul>
  );
}