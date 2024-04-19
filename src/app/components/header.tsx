"use client";
import { useState } from "react";
import HeaderTitle from "./header-title";
import Navbar from "./navbar";

export default function Header(){
    const [navbarVisible, setNavbarVisible] = useState(false);
    return(
        <header className="flex flex-col gap-gap relative">
            <HeaderTitle 
                isNavbarVisible={navbarVisible}
                onShowNavbar={setNavbarVisible}
            />
            <Navbar 
                isVisible={navbarVisible}
                onClickLink={setNavbarVisible}
            />
        </header>
    )
}