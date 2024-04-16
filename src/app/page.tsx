import Gallery from "./components/gallery";
import HeadlineCard from "./components/headline-card";
import NewContentCard from "./components/new-content-card";
import Subtitle from "./components/subtitle";
import {createClient} from "@/prismicio";

export default async function Home() {
  const client = createClient();

  const page:any = await client.getSingle('landing_page');

  const title = page.data.slices[0]?.primary.title[0].text
  const subtitle = page.data.slices[0]?.primary.description[0].text

  return (
    <div className="flex flex-col gap-gap">
      <section className="flex gap-gap">
          <HeadlineCard
            title={title}
            subtitle={subtitle}
          />
          <Gallery/>
      </section>
      <section className="flex flex-col gap-gap">
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
