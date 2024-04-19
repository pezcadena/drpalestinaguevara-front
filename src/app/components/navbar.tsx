"use client"

import { Dispatch, SetStateAction } from "react";
import ButtonLink from "./button-link";
import clsx from "clsx";

interface navbarProps{
    isVisible: boolean,
    onClickLink: Dispatch<SetStateAction<boolean>>
}

export default function Navbar({isVisible, onClickLink}:navbarProps){

    const pages = [
        {
            name:'Inicio',
            href: '/'
        },
        {
            name:'Publicaciones',
            href: '/publications'
        },
        {
            name:'Investigación',
            href: null
        },
        {
            name:'Alumnos',
            href: null
        },
        {
            name:'Colaboradores',
            href: null
        },
        {
            name:'Dra. Palestina-Guevara',
            href: null
        },
        {
            name:'Galería',
            href: null
        },
        {
            name:'Actividades',
            href: null
        },
        {
            name:'Contacto',
            href: null
        },
    ]

    return(
        

        <nav className={
            clsx(
                "flex flex-col lg:flex-row w-full bg-secondary rounded overflow-hidden transition-all ease-out duration-500 z-50 lg:h-auto",
                {
                    "h-0": !isVisible,
                    "h-[504px]": isVisible 
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
                    />
                )
            }
        </nav>
    )
}