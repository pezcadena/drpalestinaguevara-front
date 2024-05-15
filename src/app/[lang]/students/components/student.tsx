import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { StudentDocument } from "../../../../../prismicio-types";
interface StudentProps{
    student: StudentDocument<string>;
}
export default function Student({
    student
}:StudentProps){
    return(
        <article className="w-full rounded bg-white">
            <header className="flex flex-col pt-padding gap-gap px-padding lg:flex-row lg:items-center">
                {student.data.profile_photo.url && <div className="w-32 h-32 rounded overflow-hidden">
                    <PrismicNextImage 
                        field={student.data.profile_photo} 
                        className="w-full h-full object-cover"
                    />
                </div>}
                <div className="py-gap w-full lg:w-auto">
                    <h3
                        className="text-primary font-serif text-h2-bold lg:text-h3-bold-desktop"
                    >{student.data.name}</h3>
                    <p
                        className="text-primary"
                    >{student.data.institution}</p>
                </div>
            </header>
            <div className="p-padding pt-gap">
                <span
                    className="text-justify"
                >
                    <PrismicRichText field={student.data.description} />
                </span>
            </div>
        </article>
    )
}