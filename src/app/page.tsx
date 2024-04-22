import { PageDescriptionSlice, TitleSlice } from "../../prismicio-types";
import Gallery from "./components/gallery";
import HeadlineCard from "./components/headline-card";
import NewContentCard from "./components/new-content-card";
import Subtitle from "./components/subtitle";
import {createClient} from "@/prismicio";

export default async function Home() {
  const client = createClient();

  const page = await client.getSingle('landing_page');

  const title = page.data.slices[0] as TitleSlice;
  const subtitle = page.data.slices[0] as TitleSlice;
  const descriptionList = page.data.slices.filter((slice:any)=>slice.slice_type=="page_description") as PageDescriptionSlice[];

  return (
    <div className="flex flex-col gap-gap">
      <section className="flex gap-gap lg:h-[433px] flex-wrap lg:flex-nowrap flex-col-reverse lg:flex-row">
          <HeadlineCard
            titleSlice={title}
            subtitle={subtitle}
          />
          <Gallery/>
      </section>
      <section className="flex flex-col gap-gap">
        <div className="flex flex-wrap -m-mitad-gap items-stretch">
          {
            descriptionList.map(description=>
              <div key={description.id} className="grow basis-1/2 p-mitad-gap">
                <HeadlineCard
                  subtitle={description}
                />
              </div>
            )
          }
        </div>
        <Subtitle label="Últimas publicaciones"/>
        <div className="flex flex-wrap -m-mitad-gap">
          <div className="grow basis-1/3 p-mitad-gap">
            <NewContentCard/>
          </div>
          <div className="grow basis-1/3 p-mitad-gap">
            <NewContentCard/>
          </div>
          <div className="grow basis-1/3 p-mitad-gap">
            <NewContentCard/>
          </div>
          <div className="grow basis-1/3 p-mitad-gap">
            <NewContentCard/>
          </div>
          <div className="grow basis-1/3 p-mitad-gap">
            <NewContentCard/>
          </div>
        </div>
      </section>
    </div>
  );
}
