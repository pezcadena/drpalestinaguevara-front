"use client"
import ScrollSpy from "react-ui-scrollspy";
import GalleryCardList, { GalleryCardListProps } from "./gallery-card-list";
import { GalleryphotoDocument, ActivityDocument } from "../../../../../prismicio-types";

interface GalleryCardListWrapperProps{
    sectionList: {
        title: string,
        contentList: GalleryphotoDocument<string>[] | ActivityDocument<string>[],
        id: string,
    }[],
    langDictionary:any
}

export default function GalleryCardListWrapper({
    sectionList,
    langDictionary
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
                        langDictionary={langDictionary}
                    />
                )
            }
            </ScrollSpy>
        </section>
    )
}