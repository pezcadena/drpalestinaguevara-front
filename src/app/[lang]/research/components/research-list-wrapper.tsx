import ResearchList from "./research-list";

export default function ResearchListWrapper(){
    return(
        <section className="flex flex-col gap-gap">
            <ResearchList/>
            <ResearchList/>
        </section>
    )
}