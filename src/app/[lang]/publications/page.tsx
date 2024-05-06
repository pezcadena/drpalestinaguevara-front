import { createClient } from "@/prismicio";
import dayjs from "dayjs";
import ContentIndex from "../components/content-index";
import Carousel from "../components/carousel";
import HeadlineCard from "../components/headline-card";
import PublicationListWrapper from "./components/publication-list-wrapper";
import { PublicationListProps } from "./components/publication-list";
import { getDictionary } from "@/app/dictionaries/dictionaries";
import { PageProps } from "../page";

export default async function Publications({params:{lang}}:PageProps) {

    const langDictionary = await getDictionary(lang);
    const client = createClient();
    const cites = await client.getAllByType('publication');
    const publicationList: PublicationListProps[]= createPublicationList();
    const gallery = (await client.getSingle('publications_gallery')).data.slices[0]?.items;


    return (
        <div className="flex flex-col gap-gap">
            <section className="flex gap-gap lg:h-[433px] flex-wrap lg:flex-nowrap flex-col-reverse lg:flex-row">
                <HeadlineCard
                    titleText={langDictionary.navbar.publications}
                />
                <Carousel
                    images={gallery}
                />
            </section>
            <section className="
                flex flex-col lg:flex-row-reverse relative gap-gap
            ">
                <ContentIndex
                    sectionList={publicationList.map(publication=>publication.title)}
                />
                <PublicationListWrapper
                    publicationList={publicationList}
                />
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

        publicationList.sort((a, b) => {
            let fechaA = parseInt(a.title);
            let fechaB = parseInt(b.title);
          
            if (fechaA < fechaB) {
              return 1;
            }
            if (fechaA > fechaB) {
              return -1;
            }
            return 0;
        });
        return publicationList;
    }
}