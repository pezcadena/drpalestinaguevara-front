"use client"
import ScrollSpy from "react-ui-scrollspy";
import GalleryCardList, { GalleryCardListProps } from "./gallery-card-list";

interface GalleryCardListWrapperProps{
    sectionList: GalleryCardListProps[]
}

export default function GalleryCardListWrapper({
    sectionList
}:GalleryCardListWrapperProps){
    return(
        <section className="flex flex-col gap-gap w-full">
            <ScrollSpy scrollThrottle={100} useBoxMethod={false}>
            {
                sectionList.map(section=>
                    <GalleryCardList
                        key={section.title}
                        title={section.title}
                        contentList={section.contentList}
                        id={section.id}
                    />
                )
            }
            </ScrollSpy>
        </section>
    )
}