import { getDictionary } from "@/app/dictionaries/dictionaries";
import ContentIndex from "../components/content-index";
import Carousel from "../components/carousel";
import HeadlineCard from "../components/headline-card";
import { PageProps } from "../page";
import { createClient } from "@/prismicio";
import CollaboratorListWrapper from "./components/collaborator-list-wrapper";

export default async function Collaborators({params:{lang}}:PageProps){
    const langDictionary = await getDictionary(lang);
    const masterRef = (await(await fetch('https://guevarafiore.cdn.prismic.io/api/v2')).json()).refs[0].ref;
    const client = createClient();
    const carousel = (await client.getSingle('collaborators_page',{ref:masterRef})).data.slices[0]?.items;
    const researchList = [
        {
            title:"2024"
        },
        {
            title:"2023"
        }
    ]

    return (
        <div className="flex flex-col gap-gap">
            <section className="flex gap-gap lg:h-[433px] flex-wrap lg:flex-nowrap flex-col-reverse lg:flex-row">
                <HeadlineCard
                    titleText={langDictionary.navbar.collaborators}
                />
                <Carousel
                    images={carousel}
                />
            </section>
            <section className="
                flex flex-col lg:flex-row-reverse relative gap-gap
            ">
                {/* 
                <PublicationListWrapper
                    publicationList={publicationList}
                /> */}
                <ContentIndex
                    sectionList={researchList.map(research=>research.title)}
                />
                <CollaboratorListWrapper/>
            </section>
        </div>
    );
}