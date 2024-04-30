import { PageDescriptionSlice, TitleSlice } from "../../../prismicio-types";
import Gallery from "./components/gallery";
import HeadlineCard from "./components/headline-card";
import NewContentWrapper from "./components/new-content-wrapper";
import Subtitle from "./components/subtitle";
import {createClient} from "@/prismicio";
import { LangProps } from "./publications/page";
import { getDictionary } from "../dictionaries/dictionaries";

export default async function Home({params:{lang}}:LangProps) {
  const client = createClient();
  const langDictionary = await getDictionary(lang);
  
  const page = await client.getSingle('landing_page',{
    lang: lang == 'en' ? 'en-us':'es-mx'
  });
  const title = page.data.slices[0] as TitleSlice;
  const subtitle = page.data.slices[0] as TitleSlice;
  const descriptionList = page.data.slices.filter((slice:any)=>slice.slice_type=="page_description") as PageDescriptionSlice[];
  const images = page.data.slices[0]?.items;
  

  /* const recentPublications = await client.getAllByTag('Content',{
    orderings:[
      {
        field:'my.publication.date',
        direction:'desc'
      }
    ],
  }); */

  return (
    <div className="flex flex-col gap-gap">
      <section className="flex gap-gap lg:h-[433px] flex-wrap lg:flex-nowrap flex-col-reverse lg:flex-row">
          <HeadlineCard
            titleSlice={title}
            subtitle={subtitle}
          />
          <Gallery
            images={images}
          />
      </section>
      <section className="flex flex-col gap-gap">
        <div className="flex flex-wrap -m-mitad-gap items-stretch">
          {
            descriptionList.map(description=>
              <div key={description.id} className="grow lg:basis-1/2 p-mitad-gap">
                <HeadlineCard
                  subtitle={description}
                />
              </div>
            )
          }
        </div>
        <Subtitle label={langDictionary.lastPublicationsTitle}/>
       {/*  <div className="flex flex-wrap -m-mitad-gap">
          {
            recentPublications.map(document=>
              <div 
                className="grow lg:basis-1/3 p-mitad-gap"
                key={document.id}
              >
                <NewContentWrapper
                  document={document}
                />
              </div>
            )
          }
        </div> */}
      </section>
    </div>
  );
}
