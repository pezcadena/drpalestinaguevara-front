"use client";
import { useState } from "react";
import HeaderTitle from "./header-title";
import Navbar from "./navbar";
import { LangDictionary, Locale } from "@/app/dictionaries/dictionaries";

interface HeaderProps{
    langDictionary: LangDictionary,
    lang:Locale
}

export default function Header({langDictionary, lang}:HeaderProps){
    const [navbarVisible, setNavbarVisible] = useState(false);
    return(
        <header className="flex flex-col gap-gap relative">
            <HeaderTitle 
                isNavbarVisible={navbarVisible}
                onShowNavbar={setNavbarVisible}
                langDictionary={langDictionary}
            />
            <Navbar 
                isVisible={navbarVisible}
                onClickLink={setNavbarVisible}
                langDictionary={langDictionary}
                lang={lang}
            />
        </header>
    )
}