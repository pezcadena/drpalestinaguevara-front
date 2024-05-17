import { getDictionary } from "@/app/dictionaries/dictionaries";
import { createClient } from "@/prismicio";
import Carousel from "../components/carousel";
import HeadlineCard from "../components/headline-card";
import { PageProps } from "../(landing)/page";
import StudentList from "./components/student-list";
import StudentListWrapper from "./components/student-list-wrapper";
import { StudentDocument } from "../../../../prismicio-types";

export default async function Students({params:{lang}}:PageProps){
    const langDictionary = await getDictionary(lang);
    const client = createClient();
    const carousel = (await client.getSingle('students_page')).data.slices[0]?.items;
    
    const sectionList = (await client.getAllByType('student',{
        lang: lang == 'en' ? 'en-us':'es-mx',
    })).reduce<{title:string,contentList:StudentDocument<string>[]}[]>((prev,curr)=>{
        let tagExistente = prev.find(objeto => objeto.title === curr.tags[0]);

        if (tagExistente) {
            tagExistente.contentList.push(curr);
        } else {
            prev.push({
                title: curr.tags[0],
                contentList: [curr]
            });
        }
        return prev;
    },[])

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
                <StudentListWrapper
                    sectionList={sectionList}
                />                
            </section>
        </div>
    );
}