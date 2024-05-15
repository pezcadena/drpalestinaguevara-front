import { getDictionary } from "@/app/dictionaries/dictionaries";
import ContentIndex from "../components/content-index";
import Carousel from "../components/carousel";
import HeadlineCard from "../components/headline-card";
import { PageProps } from "../page";
import { createClient } from "@/prismicio";
import CollaboratorListWrapper from "./components/collaborator-list-wrapper";
import { CollaboratorDocument } from "../../../../prismicio-types";
import dayjs from "dayjs";

export default async function Collaborators({params:{lang}}:PageProps){
    const langDictionary = await getDictionary(lang);
    const client = createClient();
    const carousel = (await client.getSingle('collaborators_page')).data.slices[0]?.items;
    const sectionList = createContentSectionList(await client.getAllByType('collaborator',{
        orderings:[
          {
            field:'my.collaborator.date',
            direction:'desc'
          }
        ],
        lang: lang == 'en' ? 'en-us':'es-mx',
      }));

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
                <ContentIndex
                    sectionList={sectionList.map(section=>({title:section.title,id:section.year.toString()}))}
                />
                <CollaboratorListWrapper
                    sectionList={sectionList as any}
                />
            </section>
        </div>
    );
}

function createContentSectionList(
        res: CollaboratorDocument<string>[]
    ) {
    const sectionList: {title:string, contentList: CollaboratorDocument<string>[], year:number}[] = [];
    res.forEach(content => {
        const year = dayjs(content.data.final_date).year();
        const initialYear = dayjs(content.data.initial_date).year() ?? null;
        const contentListNueva = sectionList[year]?.contentList ?? [];

        contentListNueva.push(content);
        sectionList[year] = {
            title: initialYear ? `${initialYear} - ${year}`:year.toString(),
            contentList: contentListNueva,
            year
        };
    });

    sectionList.sort((a, b) => {
        let fechaA = a.year;
        let fechaB = b.year;
      
        if (fechaA < fechaB) {
          return 1;
        }
        if (fechaA > fechaB) {
          return -1;
        }
        return 0;
    });

    return sectionList;
}