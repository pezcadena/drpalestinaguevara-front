import { PrismicRichText } from "@prismicio/react"
import { PublicationDocument } from "../../../../../prismicio-types"


interface PublicationCardProps{
    document: PublicationDocument<string>
}

export default function Publication({document}: PublicationCardProps){
    return(
        <article
            className="
                p-padding
                bg-white
                text-justify
                rounded
            "
        >
            <PrismicRichText field={document.data.cite} />
        </article>
    )
}