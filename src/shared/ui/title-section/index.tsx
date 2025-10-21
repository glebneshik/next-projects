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
        <h2 className={classTitle}>
            {text.split(' ').map((word, index) =>
                word.toLowerCase() === 'isolation' ?
                    <span key={index} className={classTitle + "-span"}>{word}</span> :
                    index === 0 ? word : ` ${word}`
            )}
        </h2>
    );
}