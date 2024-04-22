"use client"
import { PrismicRichText } from "@prismicio/react"
import { PublicationDocument } from "../../../../prismicio-types"

interface CiteCardProps{
    document: PublicationDocument<string>
}

export default function CiteCard({document}: CiteCardProps){
    console.log(document);
    

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