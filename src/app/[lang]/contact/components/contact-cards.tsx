import { LangDictionary } from "@/app/dictionaries/dictionaries"
import { FooterDocumentData, Simplify } from "../../../../../prismicio-types"
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs"
import clsx from "clsx"

interface ContactCardsProps{
    langDictionary: LangDictionary,
    footerInfo: Simplify<FooterDocumentData>,
    inFooter: boolean
}

export default function ContactCards({
    langDictionary,
    footerInfo,
    inFooter
}:ContactCardsProps){

    
    return(
        <div className={
            clsx(
                "flex flex-col gap-gap w-full",
                {
                    "lg:max-w-[15rem] order-1 lg:order-2": inFooter
                }
            )
        }>
            <div className={
                clsx(
                    "flex flex-col gap-mitad-gap",
                    {
                        "bg-white rounded p-padding w-full": !inFooter
                    }
                )
            }>
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
            <div className={
                clsx(
                    "flex flex-col gap-mitad-gap",
                    {
                        "bg-white rounded p-padding w-full": !inFooter
                    }
                )
            }>
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
            <div className={
                clsx(
                    "flex flex-col gap-mitad-gap",
                    {
                        "bg-white rounded p-padding w-full": !inFooter
                    }
                )
            }>
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
            <div className="w-full flex justify-between items-center gap-gap">
                <a className="w-full flex justify-center p-mitad-gap bg-secondary rounded-sm cursor-pointer hover:bg-sky-700"
                href={(footerInfo.instagram as any).url}
                target="_blank"
                >
                    <BsInstagram className="text-4xl text-white"/>
                </a>
                <a className="w-full flex justify-center p-mitad-gap bg-secondary rounded-sm cursor-pointer hover:bg-sky-700"
                href={(footerInfo.twitter as any).url}
                target="_blank"
                >
                    <BsTwitter className="text-4xl text-white"/>
                </a>
                <a className="w-full flex justify-center p-mitad-gap bg-secondary rounded-sm cursor-pointer hover:bg-sky-700"
                href={(footerInfo.facebook as any).url}
                target="_blank">
                    <BsFacebook className="text-4xl text-white"/>
                </a>
            </div>
        </div>
    )
}