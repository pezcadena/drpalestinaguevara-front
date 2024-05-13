import StudentList, { StudentListProps } from "./student-list";

interface StudentListWrapperProps{
    sectionList:StudentListProps[] 
}

export default function StudentListWrapper({
    sectionList
}:StudentListWrapperProps){
    return(
        <section className="flex flex-col">
            {
                sectionList.map(section=>
                    <StudentList
                        key={section.title}
                        title={section.title}
                        contentList={section.contentList}
                    />
                )
            }
        </section>
    )
}