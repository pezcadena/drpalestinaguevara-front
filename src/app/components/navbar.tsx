"use client"

import { useState } from "react";
import ButtonLink from "./button-link";
import clsx from "clsx";

export default function Navbar(){
    let [isVisible, setVisible] = useState(true);

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

    function changeVisibility(){
        console.log("dfasdf", isVisible);
        setVisible(false);
        console.log("dfasdf", isVisible);
        
        
    }

    return(
        <nav className={
            clsx(
                "flex flex-col lg:flex-row w-full bg-secondary rounded overflow-hidden transition-all",
                {
                    "h-0": !isVisible 
                }
            )
        }>
            {
                pages.map(page=>
                    <ButtonLink 
                        label={page.name}
                        key={page.name}
                        href={page.href}
                    />
                )
            }
            <button onClick={changeVisibility}>
                prueba
            </button>
        </nav>
    )
}