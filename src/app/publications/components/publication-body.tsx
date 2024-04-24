"use client";
import ScrollSpy from "react-ui-scrollspy";
import PublicationList, { PublicationListProps } from "./publication-list";

export interface PublicationBodyProps{
    publicationList: PublicationListProps[]
}

export default function PublicationBody(
    {
        publicationList
    }: PublicationBodyProps
){
    return(
        <section className="flex flex-col gap-gap">
            <ScrollSpy scrollThrottle={100} useBoxMethod={false}>
                {
                    publicationList.map(publication=>
                        <PublicationList
                            key={publication.title}
                            publicationList={publication.publicationList}
                            title={publication.title}
                        />
                    )
                }
            </ScrollSpy>
        </section>
    )
}