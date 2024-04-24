export default function NewContentCard(){
    return(
        <article className="flex flex-col gap-gap p-padding bg-white rounded">
            <h3 className="text-h3-bold-desktop font-serif">
                Título de contenido reciente
            </h3>
            <p>
                Párrafo pequeño del contenido reciente
            </p>
            <a className="text-secondary underline cursor-pointer">Ver mas...</a>
        </article>
    )
}