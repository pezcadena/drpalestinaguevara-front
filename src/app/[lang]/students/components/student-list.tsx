import { StudentDocument } from "../../../../../prismicio-types";
import Subtitle from "../../components/subtitle";
import Student from "./student";
export interface StudentListProps{
    title: string,
    contentList: StudentDocument<string>[]
}

export default function StudentList({
    title,
    contentList
}:StudentListProps){
    return(
        <section className="flex flex-col gap-gap">
            <Subtitle
                label={title}
            />
            <div className="flex flex-wrap -m-mitad-gap">
                {
                    contentList.map(student=>
                        <div 
                            className="grow lg:basis-1/2 p-mitad-gap"
                            key={student.id}    
                        >
                            <Student
                                student={student}
                            />
                        </div>
                    )
                }
            </div>
        </section>
    )
}