interface CardProps{
    children: React.ReactNode
}

export default function Card({
    children
}:CardProps){
    return (
        <article
            className="bg-white rounded p-padding text-justify"
        >
            {children}
        </article>
    )
}