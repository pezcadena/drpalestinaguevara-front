import GalleryCardList from "./gallery-card-list";

export default function GalleryCardListWrapper(){
    return(
        <section className="flex flex-col gap-gap w-full">
            <GalleryCardList/>
            <GalleryCardList/>
        </section>
    )
}