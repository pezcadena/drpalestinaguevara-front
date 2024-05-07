import { ResearchDocument } from "../../../../../prismicio-types";
import Subtitle from "../../components/subtitle";
import ResearchCard from "./research-card";

export interface ResearchListProps{
    title: string,
    contentList: ResearchDocument<string>[]
}

export default function ResearchList({
    title,
    contentList
}:ResearchListProps){
    return(
        <section 
            className="flex flex-col gap-gap mb-gap"
            id={title}
        >
            <Subtitle
                label={title}
            />
            <div className="flex flex-wrap -m-mitad-gap">
                {
                    contentList.map(research=>
                        <div
                            className="grow lg:basis-1/2 p-mitad-gap"
                            key={research.id}
                        >
                            <ResearchCard
                                research={research}
                            />
                        </div>
                    )
                }
            </div>
        </section>
    )
}