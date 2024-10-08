"use client"

import { Dispatch, SetStateAction } from "react";
import ButtonLink from "./button-link";
import clsx from "clsx";
import { LangDictionary, Locale } from "@/app/dictionaries/dictionaries";
import { usePathname } from "next/navigation";

interface navbarProps{
    isVisible: boolean,
    onClickLink: Dispatch<SetStateAction<boolean>>,
    langDictionary: LangDictionary,
    lang: Locale
}

export default function Navbar({isVisible, onClickLink, langDictionary, lang}:navbarProps){

    const fullPath =usePathname();
    const pathWithoutLang = fullPath.split('/').slice(2).join();

    const pages = [
        {
            name:langDictionary.navbar.home,
            href: `/${lang}`
        },
        {
            name:langDictionary.navbar.publications,
            href: `/${lang}/publications`
        },
        {
            name:langDictionary.navbar.research,
            href: `/${lang}/research`
        },
        {
            name:langDictionary.navbar.students,
            href: `/${lang}/students`
        },
        {
            name:langDictionary.navbar.collaborators,
            href: `/${lang}/collaborators`
        },
        {
            name:langDictionary.navbar.dra,
            href: `/${lang}/dra-palestina-guevara`
        },
        {
            name:langDictionary.navbar.gallery,
            href: `/${lang}/gallery`
        },
        {
            name:langDictionary.navbar.activities,
            href: `/${lang}/activities`
        },
        {
            name:langDictionary.navbar.contact,
            href: `/${lang}/contact`
        },
        {
            name:langDictionary.navbar.changeLang,
            href:`/${lang == 'es' ? 'en':'es'}${
                pathWithoutLang.length == 0
                    ? pathWithoutLang
                    : '/'+pathWithoutLang
            }`
        }
    ]

    return(
        

        <nav className={
            clsx(
                "flex flex-col lg:flex-row w-full bg-white rounded overflow-hidden transition-all ease-out duration-500 z-50 lg:h-auto",
                {
                    "h-0": !isVisible,
                    "h-[560px]": isVisible 
                }
            )
        }>
            {
                pages.map(page=>
                    <ButtonLink 
                        label={page.name}
                        href={page.href}
                        key={page.name}
                        onClickLink={onClickLink}
                        isActive={page.href == fullPath}
                    />
                )
            }
        </nav>
    )
}