import { getDictionary } from "@/app/dictionaries/dictionaries";
import ContentIndex from "../components/content-index";
import Carousel from "../components/carousel";
import HeadlineCard from "../components/headline-card";
import { PageProps } from "../page";
import { createClient } from "@/prismicio";
import Student from "./components/student";
import StudentList from "./components/student-list";

export default async function Students({params:{lang}}:PageProps){
    const langDictionary = await getDictionary(lang);
    const masterRef = (await(await fetch('https://guevarafiore.cdn.prismic.io/api/v2')).json()).refs[0].ref;
    const client = createClient();
    const carousel = (await client.getSingle('students_page',{ref:masterRef})).data.slices[0]?.items;

    return (
        <div className="flex flex-col gap-gap">
            <section className="flex gap-gap lg:h-[433px] flex-wrap lg:flex-nowrap flex-col-reverse lg:flex-row">
                <HeadlineCard
                    titleText={langDictionary.navbar.students}
                />
                <Carousel
                    images={carousel}
                />
            </section>
            <section className="
                flex flex-col relative gap-gap
            ">
                <StudentList/>                
            </section>
        </div>
    );
}