"use client";

import { usePathname } from "next/navigation";
import ContactCards from "../contact/components/contact-cards";
import { LangDictionary } from "@/app/dictionaries/dictionaries";
import { Simplify, FooterDocumentData } from "../../../../prismicio-types";

interface ContactCardsFooterWrapperProps{
    langDictionary: LangDictionary,
    footerInfo: Simplify<FooterDocumentData>,
}

export default function ContactCardsFooterWrapper({
    langDictionary,
    footerInfo
}:ContactCardsFooterWrapperProps){
    const fullPath =usePathname();

    if (fullPath.split('/')[2] == 'contact') {
        return;
    }   
    
    return <ContactCards
                langDictionary={langDictionary}
                footerInfo={footerInfo}
                inFooter={true}
                />  
}