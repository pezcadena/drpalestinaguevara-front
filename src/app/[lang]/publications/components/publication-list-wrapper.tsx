"use client";
import ScrollSpy from "react-ui-scrollspy";
import PublicationList, { PublicationListProps } from "./publication-list";

export interface PublicationListWrapperProps{
    publicationList: PublicationListProps[]
}

export default function PublicationListWrapper(
    {
        publicationList
    }: PublicationListWrapperProps
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