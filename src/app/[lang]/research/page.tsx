import { getDictionary } from "@/app/dictionaries/dictionaries";
import { createClient } from "@/prismicio";
import Carousel from "../components/carousel";
import HeadlineCard from "../components/headline-card";
import { PageProps } from "../page";
import ResearchList from "./components/research-list";
import ResearchListWrapper from "./components/research-list-wrapper";
import ContentIndex from "../components/content-index";

export default async function Research({params:{lang}}:PageProps){
    const langDictionary = await getDictionary(lang);
    const client = createClient();
    const cites = await client.getAllByType('publication');
    /* const publicationList: PublicationListProps[]= createPublicationList(); */
    const gallery = (await client.getSingle('publications_gallery')).data.slices[0]?.items;
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
                    titleText={langDictionary.navbar.research}
                />
                <Carousel
                    images={gallery}
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
                <ResearchListWrapper/>
            </section>
        </div>
    );
}