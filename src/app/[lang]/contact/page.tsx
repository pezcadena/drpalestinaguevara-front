import { getDictionary } from "@/app/dictionaries/dictionaries";
import { createClient } from "@/prismicio";
import Carousel from "../components/carousel";
import HeadlineCard from "../components/headline-card";
import { PageProps } from "../page";
import ContactCards from "./components/contact-cards";
import Map from "./components/map";

export default async function Contact({params:{lang}}:PageProps){
    const langDictionary = await getDictionary(lang);
    const client = createClient();
    const cites = await client.getAllByType('publication');
    /* const publicationList: PublicationListProps[]= createPublicationList(); */
    const carousel = (await client.getSingle('contact_page')).data.slices[0]?.items;
    const researchList = [
        {
            title:"2024"
        },
        {
            title:"2023"
        }
    ];
    const footerInfo = (await client.getSingle('footer')).data;

    return (
        <div className="flex flex-col gap-gap">
            <section className="flex gap-gap lg:h-[433px] flex-wrap lg:flex-nowrap flex-col-reverse lg:flex-row">
                <HeadlineCard
                    titleText={langDictionary.navbar.contact}
                />
                <Carousel
                    images={carousel}
                />
            </section>
            <section className="
                flex flex-col lg:flex-row gap-gap
            ">
                <div
                    className="w-1/3"
                >
                    <ContactCards
                        langDictionary={langDictionary}
                        footerInfo={footerInfo}
                        inFooter={false}
                    />
                </div>
                <Map/>
            </section>
        </div>
    );
}