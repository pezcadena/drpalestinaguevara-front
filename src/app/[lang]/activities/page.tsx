import { getDictionary } from "@/app/dictionaries/dictionaries";
import { createClient } from "@/prismicio";
import { ActivityDocument } from "../../../../prismicio-types";
import Carousel from "../components/carousel";
import ContentIndex from "../components/content-index";
import HeadlineCard from "../components/headline-card";
import GalleryCardListWrapper from "../gallery/components/gallery-card-list-wrapper";
import { PageProps } from "../(landing)/page";
import dayjs from "dayjs";

export default async function Activities({params:{lang}}:PageProps){
    const langDictionary = await getDictionary(lang);
    
    const client = createClient();
    const carousel = (await client.getSingle('activities_page')).data.slices[0]?.items;
    const sectionList = createContentSectionListByMonth(await client.getAllByType('activity',{
        lang: lang == 'en' ? 'en-us':'es-mx',
    }), langDictionary);

    return (
        <div className="flex flex-col gap-gap">
            <section className="flex gap-gap lg:h-[433px] flex-wrap lg:flex-nowrap flex-col-reverse lg:flex-row">
                <HeadlineCard
                    titleText={langDictionary.navbar.activities}
                />
                <Carousel
                    images={carousel}
                />
            </section>
            <section className="
                flex flex-col lg:flex-row-reverse relative gap-gap
            ">
                <ContentIndex
                    sectionList={sectionList.map(section=>({id: section.id, title: section.title}))}
                />
                <GalleryCardListWrapper
                    sectionList={sectionList}
                    langDictionary={langDictionary}
                />
            </section>
        </div>
    );
}

function createContentSectionListByMonth(
    res: ActivityDocument<string>[],
    langDictionary:any
) {
const sectionList: {title:string, contentList: ActivityDocument<string>[], id:string}[] = [];
res.forEach((content) => {
    const month = dayjs(content.data.full_date).month();
    const contentListNueva = sectionList[month]?.contentList ?? [];

    contentListNueva.push(content);
    sectionList[month] = {
        title: langDictionary.months[month],
        contentList: contentListNueva,
        id: month.toString()
    };
});

sectionList.sort((a, b) => {
    let fechaA = a.id;
    let fechaB = b.id;
  
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