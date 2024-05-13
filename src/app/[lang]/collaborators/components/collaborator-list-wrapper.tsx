"use client"
import ScrollSpy from "react-ui-scrollspy";
import CollaboratorList, { CollaboratorListProps } from "./collaborator-list";

interface CollaboratorListWrapperProps{
    sectionList: CollaboratorListProps[]
}

export default function CollaboratorListWrapper({
    sectionList
}:CollaboratorListWrapperProps){
    return(
        <section className="flex flex-col">
            <ScrollSpy scrollThrottle={100} useBoxMethod={false}>
            {
                sectionList.map(section=>
                    <CollaboratorList
                        key={section.title}
                        title={section.title}
                        contentList={section.contentList}
                        year={section.year}
                    />
                )
            }
            </ScrollSpy>
        </section>
    )
}