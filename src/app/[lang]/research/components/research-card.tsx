import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import { ResearchDocument } from "../../../../../prismicio-types";
interface ResearchCardProps{
    research: ResearchDocument<string>
}
export default function ResearchCard({
    research
}:ResearchCardProps){
    const link:any = (research.data.optional_link as any).url

    return(
        <article className="bg-white rounded overflow-hidden">
            <header className="overflow-hidden lg:h-[400px]">
                <PrismicNextImage 
                    field={research.data.cover_image} 
                    className="w-full h-full object-cover"
                />            
            </header>
            <div className="flex flex-col gap-gap p-padding pt-gap w-full">
                <div className="py-gap text-primary">
                    <h3 className="text-h2-bold font-serif">
                        {research.data.title}
                    </h3>
                    <p>
                        {research.data.date}
                    </p>
                </div>
                <div className="flex flex-col gap-mitad-gap lg:flex-row lg:gap-12">
                    <div className="flex flex-col gap-mitad-gap">
                        {
                            research.data.slices.filter(slice=>slice.slice_type == "collaborator").length>0
                            && <b>Colaboradores:</b>
                        }
                        {
                            research.data.slices.filter(slice=>slice.slice_type == "collaborator").map(collaborator=>
                                <p
                                    key={collaborator.id}
                                >
                                    {collaborator.primary.name}
                                </p>
                            )
                        }
                    </div>
                    <div className="flex flex-col gap-mitad-gap">
                        {
                            research.data.slices.filter(slice=>slice.slice_type == "thesis_student").length>0
                            && <b>Tesistas:</b>
                        }
                        {
                            research.data.slices.filter(slice=>slice.slice_type == "thesis_student").map(student=>
                                <p
                                    key={student.id}
                                >
                                    {student.primary.name}
                                </p>
                            )
                        }
                    </div>
                </div>
                <span className="text-justify">
                    <PrismicRichText 
                        field={research.data.description}
                    />
                </span>
            </div>
            {
                link 
                    && <footer className="p-gap bg-secondary text-center text-white cursor-pointer lg:bg-white lg:text-start lg:text-secondary lg:cursor-default lg:px-padding lg:pt-0">
                        <span className="cursor-pointer">
                            <PrismicNextLink field={research.data.optional_link}>Link</PrismicNextLink>
                        </span>
                    </footer>
            }
            
        </article>
    )
}