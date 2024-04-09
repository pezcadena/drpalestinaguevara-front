export default function HeadlineCard(){
    return (
        <article className="flex flex-col gap-gap p-padding justify-center bg-primary rounded">
            <h1 className="text-h2-bold-desktop text-white font-serif">
                Párrafo grande de titular de la página
            </h1>
            <p className="text-white">
                Párrafo pequeño que complementa el titular de la página
            </p>
        </article>
    )
}