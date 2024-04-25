import { DocumentTypeEnum } from "@/app/api/enums/document-type.enum";
import { AllDocumentTypes } from "../../../../prismicio-types"
import Publication from "../publications/components/publication";

interface NewContentWrapperProps{
    document: AllDocumentTypes
}
export default function NewContentWrapper(
    {
        document
    }: NewContentWrapperProps
){
    switch (document.type) {
        case DocumentTypeEnum.publication:
            return(
                <div className="h-full">
                    <Publication
                        document={document}
                    />
                </div>
            );
        default:
            return(
                <div className="h-full">
                    NADA
                </div>
            );
    }
}