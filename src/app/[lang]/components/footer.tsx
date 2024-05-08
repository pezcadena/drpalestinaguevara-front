import { LangDictionary } from "@/app/dictionaries/dictionaries";
import { createClient } from "@/prismicio";
import Image from "next/image";
import ContactCards from "../contact/components/contact-cards";
import ContactCardsFooterWrapper from "./contact-cards-footer-wrapper";

interface FooterProps{
    langDictionary: LangDictionary,
}


export default async function Footer(
    {
        langDictionary
    }: FooterProps
){
    const masterRef = (await(await fetch('https://guevarafiore.cdn.prismic.io/api/v2')).json()).refs[0].ref;
    const client = createClient();
    const footerInfo = (await client.getSingle('footer',{ref:masterRef})).data;


    return(
        <footer className="w-full flex flex-col px-gap py-padding gap-padding lg:flex-row-reverse lg:justify-between items-center">
            <ContactCardsFooterWrapper
                footerInfo={footerInfo}
                langDictionary={langDictionary}
            />
            <Image 
                src="/img/logo.png"
                alt="Logo del laboratorio de ecología evolutiva de la BUAP"
                className="w-[16rem] order-2 lg:order-1"
                height={1000}
                width={1000}
            />
        </footer>
    )
}