import Subtitle from "../../components/subtitle";
import ResearchCard from "./research-card";

export default function ResearchList(){
    return(
        <section className="flex flex-col gap-gap">
            <Subtitle
                label="Subtitulo"
            />
            <div className="flex flex-wrap -m-mitad-gap">
                <div className="grow lg:basis-1/2 p-mitad-gap">
                    <ResearchCard/>
                </div>
                <div className="grow lg:basis-1/2 p-mitad-gap">
                    <ResearchCard/>
                </div>
            </div>
        </section>
    )
}