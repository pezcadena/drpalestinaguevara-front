import { getDictionary } from "@/app/dictionaries/dictionaries";
import Carousel from "../components/carousel";
import HeadlineCard from "../components/headline-card";
import { PageProps } from "../page";
import { createClient } from "@/prismicio";
import Subtitle from "../components/subtitle";
import Card from "../components/card";

export default async function DraPalestinaGuevara({params:{lang}}:PageProps){
    const langDictionary = await getDictionary(lang);
    const masterRef = (await(await fetch('https://guevarafiore.cdn.prismic.io/api/v2')).json()).refs[0].ref;
    const client = createClient();
    const carousel = (await client.getSingle('dra_palestina_guevara_page',{ref:masterRef})).data.slices[0]?.items;
    return(
        <main className="flex flex-col gap-gap">
            <section className="flex gap-gap lg:h-[433px] flex-wrap lg:flex-nowrap flex-col-reverse lg:flex-row">
                <HeadlineCard
                    titleText={langDictionary.navbar.dra}
                />
                <Carousel
                    images={carousel}
                />
            </section>
            <section className="
                flex flex-col lg:flex-row gap-gap flex-wrap lg:flex-nowrap
            ">
                <Subtitle
                    label="Título"
                />
                <Card>
                    <p>
                    Párrafo de la biografia. lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.
                    </p>
                </Card>
            </section>
            <section className="flex flex-col gap-gap">
                <Subtitle
                    label={langDictionary.navbar.publications}
                />
                <Card>
                    <p>
                    Publicaciones solo de la dra
                    </p>
                </Card>
                <Card>
                    <p>
                    Publicaciones solo de la dra
                    </p>
                </Card>
                <Card>
                    <p>
                    Publicaciones solo de la dra
                    </p>
                </Card>
                <Card>
                    <p>
                    Publicaciones solo de la dra
                    </p>
                </Card>
                <Card>
                    <p>
                    Publicaciones solo de la dra
                    </p>
                </Card>
            </section>
        </main>
    )
}