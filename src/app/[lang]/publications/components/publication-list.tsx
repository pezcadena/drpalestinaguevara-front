
import { PublicationDocument } from "../../../../../prismicio-types"
import Subtitle from "../../components/subtitle"
import Publication from "./publication"

export interface PublicationListProps{
    title: string,
    publicationList: PublicationDocument<string>[]
}

export default function PublicationList({
    title,
    publicationList
}:PublicationListProps){
    return(
        <section
            className="flex flex-col gap-gap mb-gap"
            id={title}
        >
            <Subtitle
                label={title}
            />
            {
                publicationList.map((cite)=>
                    <Publication
                        document={cite}
                        key={cite.id}
                    />
                )
            }
        </section>
    )
}