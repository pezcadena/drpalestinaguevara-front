import { createClient } from "@/prismicio";
import Gallery from "../components/gallery";
import HeadlineCard from "../components/headline-card";
import PublicationList, { PublicationListProps } from "./components/publication-list";
import dayjs from "dayjs";

export default async function Publications() {
    
    const client = createClient();
    const cites = await client.getAllByType('publication');
    const publicationList: PublicationListProps[]= createPublicationList()

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
                    publicationList.map(publication=>
                        <PublicationList
                            key={publication.title}
                            publicationList={publication.publicationList}
                            title={publication.title}
                        />
                    )
                }
            </section>
        </div>
    );

    function createPublicationList() {
        const publicationList: PublicationListProps[] = [];
        cites.forEach(cite => {
            const year = dayjs(cite.data.date).year();
            const publicationListNueva = publicationList[year]?.publicationList ?? [];

            publicationListNueva.push(cite);
            publicationList[year] = {
                title: year.toString(),
                publicationList: publicationListNueva
            };
        });
        return publicationList;
    }
}