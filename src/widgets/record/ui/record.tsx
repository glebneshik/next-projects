
import { TitleSection } from "@/shared/ui/title-section";
import "./record.scss";
import { RecordList } from "@/shared/ui/record-list";

export function Record() {
  return (
    <section className="record">
      <TitleSection classTitle="record__title" text="Запись" />

      <RecordList deadlines={["10:00", "11:30", "13:00", "14:30", "16:00", "17:30", "19:00", "20:30", "22:00", "23:30"]} />
      <RecordList deadlines={["10:00", "11:30", "13:00", "14:30", "16:00", "17:30", "19:00", "20:30", "22:00", "23:30"]} />
      <RecordList deadlines={["10:00", "11:30", "13:00", "14:30", "16:00", "17:30", "19:00", "20:30", "22:00", "23:30", "01:00"]} />
      <RecordList deadlines={["10:00", "11:30", "13:00", "14:30", "16:00", "17:30", "19:00", "20:30", "22:00", "23:30", "01:00"]} />
      <RecordList deadlines={["10:00", "11:30", "13:00", "14:30", "16:00", "17:30", "19:00", "20:30", "22:00", "23:30", "01:00"]} />
      <RecordList deadlines={["10:00", "11:30", "13:00", "14:30", "16:00", "17:30", "19:00", "20:30", "22:00", "23:30"]} />
      <RecordList deadlines={["10:00", "11:30", "13:00", "14:30", "16:00", "17:30", "19:00", "20:30", "22:00", "23:30"]} />
    </section>
  );
}
