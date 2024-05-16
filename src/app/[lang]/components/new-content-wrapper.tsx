import { DocumentTypeEnum } from "@/app/api/enums/document-type.enum";
import { AllDocumentTypes } from "../../../../prismicio-types"
import Publication from "../publications/components/publication";
import ResearchCard from "../research/components/research-card";
import GalleryCard from "../gallery/components/gallery-card";

interface NewContentWrapperProps{
    document: AllDocumentTypes,
    langDictionary: any
}
export default function NewContentWrapper(
    {
        document,
        langDictionary
    }: NewContentWrapperProps
){
    switch (document.type) {
        case DocumentTypeEnum.publication:
            return(
                <div className="grow lg:basis-1/3 p-mitad-gap">
                    <Publication
                        document={document}
                    />
                </div>
            );
         case DocumentTypeEnum.research:
            return(
                <div className="grow lg:basis-1/2 p-mitad-gap">
                    <ResearchCard
                        research={document}
                    />
                </div>
            );
        case DocumentTypeEnum.activity:
                return(
                    <div className="grow lg:basis-1/2 p-mitad-gap">
                        <GalleryCard
                            photo={document}
                            langDictionary={langDictionary}
                        />
                    </div>
                );
        default:
            return(
                <span></span>
            );
    }
}