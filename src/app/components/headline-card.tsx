interface HeadlineCardProps{
    title: string,
    subtitle: string
}

export default function HeadlineCard({title, subtitle}:HeadlineCardProps){

    return (
        <article className="flex flex-col gap-gap p-padding justify-center bg-primary rounded w-[650px]">
            <h1 className="text-h3-bold-desktop text-white font-serif">
                {title}
            </h1>
            <p className="text-white">
                {subtitle}
            </p>
        </article>
    )
}