export function TitleSection(
    {
        classTitle,
        text
    }: {
        classTitle: string,
        text: string
    }
) {
    return (
        <h2 className={classTitle}>{text}</h2>
    )
}