import Subtitle from "../../components/subtitle";
import GalleryCard from "./gallery-card";

export default function GalleryCardList(){
    return(
        <section className="flex flex-col gap-gap">
            <Subtitle
                label="Subtitulo"
            />
            <div className="flex flex-wrap -m-mitad-gap">
                <div className="w-full lg:w-1/2 p-mitad-gap">
                    <GalleryCard/>
                </div>
                <div className="w-full lg:w-1/2 p-mitad-gap">
                    <GalleryCard/>
                </div>
                <div className="w-full lg:w-1/2 p-mitad-gap">
                    <GalleryCard/>
                </div>
            </div>
        </section>
    )
}