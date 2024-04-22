import { createClient } from "@/prismicio";
import Gallery from "../components/gallery";
import HeadlineCard from "../components/headline-card";
import CiteCard from "./components/cite-card";

export default async function Publications() {
    const client = createClient();

    const cites = await client.getAllByType('publication');

    return (
        <div className="flex flex-col gap-gap">
            <section className="flex gap-gap lg:h-[433px] flex-wrap lg:flex-nowrap flex-col-reverse lg:flex-row">
                <HeadlineCard
                    titleText="Publicaciones"
                />
                <Gallery/>
            </section>
            <section className="flex flex-col gap-gap">
                {
                    cites.map((cite)=>
                        <CiteCard
                            document={cite}
                            key={cite.id}
                        />
                    )
                }
            </section>
        </div>
    );
}