import { GalleryphotoDocument } from "../../../../../prismicio-types";
import Subtitle from "../../components/subtitle";
import GalleryCard from "./gallery-card";

export interface GalleryCardListProps{
    title: string,
    contentList: GalleryphotoDocument<string>[],
    id: string
}

export default function GalleryCardList({
    title,
    contentList,
    id
}:GalleryCardListProps){
    return(
        <section className="flex flex-col gap-gap mb-gap" id={id}>
            <Subtitle
                label={title}
            />
            <div className="flex flex-wrap -m-mitad-gap">
                {
                    contentList.map(photo=>
                        <div className="grow lg:basis-1/2 p-mitad-gap" key={photo.id}>
                            <GalleryCard
                                photo={photo}
                            />
                        </div>
                    )
                }
            </div>
        </section>
    )
}