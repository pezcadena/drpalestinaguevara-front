import { LangDictionary } from "@/app/dictionaries/dictionaries";
import { createClient } from "@/prismicio";
import Image from "next/image";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

interface FooterProps{
    langDictionary: LangDictionary,
}


export default async function Footer(
    {
        langDictionary
    }: FooterProps
){
    const client = createClient();
    const footerInfo = (await client.getSingle('footer')).data;


    return(
        <footer className="w-full flex flex-col px-gap py-padding gap-padding lg:flex-row lg:justify-between items-center">
            <div className="flex flex-col gap-gap w-full lg:max-w-[15rem] order-2 lg:order-1">
                <div className="flex flex-col gap-mitad-gap">
                    <p className="font-bold">
                        {langDictionary.footer.phone}
                    </p>
                    <p>
                        {footerInfo.phone_number}
                    </p>
                    {
                        footerInfo.optional_phone_number_1 &&
                        <p>
                            {footerInfo.optional_phone_number_1}
                        </p>
                    }
                    {
                        footerInfo.optional_phone_number_2 &&
                        <p>
                            {footerInfo.optional_phone_number_2}
                        </p>
                    }
                </div>
                <div className="flex flex-col gap-mitad-gap">
                    <p className="font-bold">{langDictionary.footer.email}</p>
                    <p>{footerInfo.email}</p>
                    {
                        footerInfo.optional_email_1 &&
                        <p>
                            {footerInfo.optional_email_1}
                        </p>
                    }
                    {
                        footerInfo.optional_email_2 &&
                        <p>
                            {footerInfo.optional_email_2}
                        </p>
                    }
                </div>
                <div className="flex flex-col gap-mitad-gap">
                    <p className="font-bold">{langDictionary.footer.address}</p>
                    <p>{footerInfo.address}</p>
                    {
                        footerInfo.optional_address_1 &&
                        <p>
                            {footerInfo.optional_address_1}
                        </p>
                    }
                    {
                        footerInfo.optional_address_2 &&
                        <p>
                            {footerInfo.optional_address_2}
                        </p>
                    }
                </div>
                <div className="flex justify-between items-center">
                </div>
                <div className="w-full flex justify-between items-center gap-gap">
                    <a className="w-full flex justify-center p-mitad-gap bg-secondary rounded-sm lg:w-fit cursor-pointer hover:bg-sky-700"
                    href={(footerInfo.instagram as any).url}
                    target="_blank"
                    >
                        <BsInstagram className="text-4xl text-white"/>
                    </a>
                    <a className="w-full flex justify-center p-mitad-gap bg-secondary rounded-sm lg:w-fit cursor-pointer hover:bg-sky-700"
                    href={(footerInfo.twitter as any).url}
                    target="_blank"
                    >
                        <BsTwitter className="text-4xl text-white"/>
                    </a>
                    <a className="w-full flex justify-center p-mitad-gap bg-secondary rounded-sm lg:w-fit cursor-pointer hover:bg-sky-700"
                    href={(footerInfo.facebook as any).url}
                    target="_blank">
                        <BsFacebook className="text-4xl text-white"/>
                    </a>
                </div>
            </div>
            <Image 
                src="/img/logo.png"
                alt="Logo del laboratorio de ecología evolutiva de la BUAP"
                className="w-[16rem] order-1 lg:order-2"
                height={1000}
                width={1000}
            />
        </footer>
    )
}