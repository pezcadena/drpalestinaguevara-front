import { StudentDocument } from "../../../../../prismicio-types";
import Subtitle from "../../components/subtitle";
import Student from "../../students/components/student";
export interface CollaboratorListProps{
    title: string,
    contentList: StudentDocument<string>[],
    year: number
}

export default function CollaboratorList({
    title,
    contentList,
    year
}:CollaboratorListProps){
    return(
        <section className="flex flex-col gap-gap mb-gap"
        id={year.toString()}
        >
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