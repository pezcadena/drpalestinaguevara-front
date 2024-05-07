import { PageDescriptionSlice, TitleSlice } from "../../../prismicio-types";
import Carousel from "./components/carousel";
import HeadlineCard from "./components/headline-card";
import Subtitle from "./components/subtitle";
import {createClient} from "@/prismicio";
import { getDictionary, Locale } from "../dictionaries/dictionaries";
import NewContentWrapper from "./components/new-content-wrapper";


export type PageProps = {
  params:{
      lang: Locale
  }
} 

export default async function Home({params:{lang}}:PageProps) {
  const client = createClient();
  const langDictionary = await getDictionary(lang);
  
  const page = await client.getSingle('landing_page',{
    lang: lang == 'en' ? 'en-us':'es-mx'
  });
  const title = page.data.slices[0] as TitleSlice;
  const subtitle = page.data.slices[0] as TitleSlice;
  const descriptionList = page.data.slices.filter((slice:any)=>slice.slice_type=="page_description") as PageDescriptionSlice[];
  const images = page.data.slices[0]?.items;
  

  const recentPublications = await client.getAllByTag('Content',{
    orderings:[
      {
        field:'my.publication.date',
        direction:'desc'
      }
    ],
    limit:6
  });

  return (
    <div className="flex flex-col gap-gap">
      <section className="flex gap-gap lg:h-[433px] flex-wrap lg:flex-nowrap flex-col-reverse lg:flex-row">
          <HeadlineCard
            titleSlice={title}
            subtitle={subtitle}
          />
          <Carousel
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
        <div className="flex flex-wrap -m-mitad-gap">
          {
            recentPublications.map(document=>
              
                <NewContentWrapper
                  document={document}
                  key={document.id}
                />
            )
          }
        </div>
      </section>
    </div>
  );
}

{/* <div 
                className="grow lg:basis-1/2 p-mitad-gap"
                key={document.id}
              >
              </div> */}