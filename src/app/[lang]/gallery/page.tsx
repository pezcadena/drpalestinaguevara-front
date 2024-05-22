import { getDictionary } from "@/app/dictionaries/dictionaries";
import { createClient } from "@/prismicio";
import { PageProps } from "../(landing)/page";
import { GalleryphotoDocument } from "../../../../prismicio-types";
import Carousel from "../components/carousel";
import ContentIndex from "../components/content-index";
import HeadlineCard from "../components/headline-card";
import GalleryCardListWrapper from "./components/gallery-card-list-wrapper";

export default async function Gallery({params:{lang}}:PageProps){
    const langDictionary = await getDictionary(lang);
    
    const client = createClient();
    const carousel = (await client.getSingle('gallery_page')).data.slices[0]?.items;

    
    const sectionList = (await client.getAllByType('galleryphoto',{
        lang: lang == 'en' ? 'en-us':'es-mx',
    })).reduce<{title:string,contentList:GalleryphotoDocument<string>[],id:string}[]>((prev,curr)=>{
        let tagExistente = prev.find(objeto => objeto.title === curr.tags[0]);

        if (tagExistente) {
            tagExistente.contentList.push(curr);
        } else {
            prev.push({
                title: curr.tags[0],
                contentList: [curr],
                id: curr.tags[0].replace(/[^a-zA-Z]/g, "")
            });
        }
        return prev;
    },[]);

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
                <ContentIndex
                    sectionList={sectionList.map(section=>({id:section.id, title: section.title}))}
                />
                <GalleryCardListWrapper
                    sectionList={sectionList}
                    langDictionary={langDictionary}
                />
            </section>
            
        </div>
    );
}