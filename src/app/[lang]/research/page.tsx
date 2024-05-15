import { getDictionary } from "@/app/dictionaries/dictionaries";
import { createClient } from "@/prismicio";
import Carousel from "../components/carousel";
import ContentIndex from "../components/content-index";
import HeadlineCard from "../components/headline-card";
import { PageProps } from "../page";
import ResearchListWrapper from "./components/research-list-wrapper";
import { createContentSectionListbyYear } from "@/app/functions/create-content-section-list";
import { ResearchDocument } from "../../../../prismicio-types";

export default async function Research({params:{lang}}:PageProps){
    const langDictionary = await getDictionary(lang);
    const client = createClient();
    const carousel = (await client.getSingle('research_page')).data.slices[0]?.items;
    const sectionList = createContentSectionListbyYear<ResearchDocument<string>>(await client.getAllByType('research',{
        orderings:[
          {
            field:'my.research.date',
            direction:'desc'
          }
        ],
        lang: lang == 'en' ? 'en-us':'es-mx',
      }));

    return (
        <div className="flex flex-col gap-gap">
            <section className="flex gap-gap lg:h-[433px] flex-wrap lg:flex-nowrap flex-col-reverse lg:flex-row">
                <HeadlineCard
                    titleText={langDictionary.navbar.research}
                />
                <Carousel
                    images={carousel}
                />
            </section>
            <section className="
                flex flex-col lg:flex-row-reverse relative gap-gap
            ">
                <ContentIndex
                    sectionList={sectionList.map(section=>({id:section.title,title:section.title}))}
                />
                <ResearchListWrapper
                    sectionList={sectionList}
                />
            </section>
        </div>
    );
}