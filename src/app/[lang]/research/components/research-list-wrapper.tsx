"use client"
import ScrollSpy from "react-ui-scrollspy";
import ResearchList, { ResearchListProps } from "./research-list";
interface ResearchListWrapperProps{
    sectionList:ResearchListProps[] 
}
export default function ResearchListWrapper({
    sectionList: researchListProps
}:ResearchListWrapperProps){
    return(
        <section className="flex flex-col gap-gap">
            <ScrollSpy scrollThrottle={100} useBoxMethod={false}>
            {
                researchListProps.map(section=>
                    <ResearchList
                        key={section.title}
                        title={section.title}
                        contentList={section.contentList}
                    />
                )
            }
            </ScrollSpy>
        </section>
    )
}