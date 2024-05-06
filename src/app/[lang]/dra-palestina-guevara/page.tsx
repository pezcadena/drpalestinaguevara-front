import { getDictionary } from "@/app/dictionaries/dictionaries";
import Gallery from "../components/gallery";
import HeadlineCard from "../components/headline-card";
import { PageProps } from "../page";
import { createClient } from "@/prismicio";
import Subtitle from "../components/subtitle";
import Card from "../components/card";

export default async function DraPalestinaGuevara({params:{lang}}:PageProps){
    const langDictionary = await getDictionary(lang);
    const client = createClient();
    const cites = await client.getAllByType('publication');
    /* const publicationList: PublicationListProps[]= createPublicationList(); */
    const gallery = (await client.getSingle('publications_gallery')).data.slices[0]?.items;
    return(
        <main className="flex flex-col gap-gap">
            <section className="flex gap-gap lg:h-[433px] flex-wrap lg:flex-nowrap flex-col-reverse lg:flex-row">
                <HeadlineCard
                    titleText={langDictionary.navbar.dra}
                />
                <Gallery
                    images={gallery}
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