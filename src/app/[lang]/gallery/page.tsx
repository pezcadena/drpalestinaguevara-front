import { getDictionary } from "@/app/dictionaries/dictionaries";
import { createClient } from "@/prismicio";
import Carousel from "../components/carousel";
import ContentIndex from "../components/content-index";
import HeadlineCard from "../components/headline-card";
import { PageProps } from "../page";
import ResearchListWrapper from "../research/components/research-list-wrapper";
import GalleryCardListWrapper from "./components/gallery-card-list-wrapper";

export default async function Gallery({params:{lang}}:PageProps){
    const langDictionary = await getDictionary(lang);
    const masterRef = (await(await fetch('https://guevarafiore.cdn.prismic.io/api/v2')).json()).refs[0].ref;
    const client = createClient();
    const carousel = (await client.getSingle('gallery_page',{ref:masterRef})).data.slices[0]?.items;
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
                    titleText={langDictionary.navbar.gallery}
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
                <GalleryCardListWrapper/>
            </section>
        </div>
    );
}