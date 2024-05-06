import { getDictionary } from "@/app/dictionaries/dictionaries";
import ContentIndex from "../components/content-index";
import Gallery from "../components/gallery";
import HeadlineCard from "../components/headline-card";
import { PageProps } from "../page";
import { createClient } from "@/prismicio";
import Student from "./components/student";
import StudentList from "./components/student-list";

export default async function Students({params:{lang}}:PageProps){
    const langDictionary = await getDictionary(lang);
    const client = createClient();
    const cites = await client.getAllByType('publication');
    /* const publicationList: PublicationListProps[]= createPublicationList(); */
    const gallery = (await client.getSingle('publications_gallery')).data.slices[0]?.items;
    

    return (
        <div className="flex flex-col gap-gap">
            <section className="flex gap-gap lg:h-[433px] flex-wrap lg:flex-nowrap flex-col-reverse lg:flex-row">
                <HeadlineCard
                    titleText={langDictionary.navbar.students}
                />
                <Gallery
                    images={gallery}
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