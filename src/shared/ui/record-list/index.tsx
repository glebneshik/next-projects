import "./index.scss";

export function RecordList({ deadlines }: { deadlines: string[] }) {
    return (
        <ul className="record__list">
            <li className="record__list_date">27 апреля, Воскресенье</li>
            {

                deadlines.map((deadline, i) => (
                    <li key={i} className="record__list_item">{deadline}</li>
                ))

            }
        </ul>
    )
}