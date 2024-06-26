import { getDictionary } from "@/app/dictionaries/dictionaries";
import { createClient } from "@/prismicio";
import { PrismicRichText } from "@prismicio/react";
import Link from "next/link";
import { PageProps } from "../(landing)/page";
import { CareerSliceDefaultItem, ImageSliceDefaultItem, PublicationDocument, Simplify } from "../../../../prismicio-types";
import Card from "../components/card";
import Carousel from "../components/carousel";
import HeadlineCard from "../components/headline-card";
import Subtitle from "../components/subtitle";
import Publication from "../publications/components/publication";

export default async function DraPalestinaGuevara({params:{lang}}:PageProps){
    const langDictionary = await getDictionary(lang);
    const client = createClient();
    const page = (await client.getSingle('dra_palestina_guevara_page',{
        lang: lang == 'en' ? 'en-us':'es-mx',
    })).data
    const carousel: Simplify<ImageSliceDefaultItem>[] = (page.slices.find(value=>value.slice_type=="image")?.items) as Simplify<ImageSliceDefaultItem>[] ?? [];
    const description = page.slices.find(value=>value.slice_type=="page_description");
    const careerList: Simplify<CareerSliceDefaultItem>[] = (page.slices.find(value=>value.slice_type=="career")?.items) as Simplify<CareerSliceDefaultItem>[] ?? [];
    const recentPublications: PublicationDocument<string>[] = await client.getAllByTag('Publication',{
        orderings:[
          {
            field:'my.publication.date',
            direction:'desc'
          }
        ],
        limit:5,
      });
    
    
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
                <Card>
                    <PrismicRichText
                        field={description?.primary.description}
                    />
                </Card>
            </section>
            <div className="flex gap-gap lg:flex-row flex-col">
                <section className="flex flex-col gap-gap">
                    <Subtitle
                        label={langDictionary.dra.career}
                    />
                    {careerList.map((career)=>
                        <Card
                            key={career.description[0]?.type}
                        >
                            <PrismicRichText
                                field={career.description}
                            />
                        </Card>
                    )}
                </section>
                <section className="flex flex-col gap-gap">
                    <Subtitle
                        label={langDictionary.lastPublicationsTitle}
                    />
                    {
                        recentPublications.map(publication=>
                            <Publication
                                key={publication
                                    .id
                                }
                                document={publication}
                            />
                        )
                    }
                    <Link 
                        className="bg-secondary rounded p-gap text-white transition-all ease-in-out lg:duration-300 hover:bg-sky-700 text-center"
                        href={`/${lang}/publications`}
                    >
                        Ver más publicaciones
                    </Link>
                </section>
            </div>
        </main>
    )
}