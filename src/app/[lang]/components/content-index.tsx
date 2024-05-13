"use client"

import React from "react";

export interface ContentIndexProps{
    sectionList: string[],
}

export default function ContentIndex(
    {
        sectionList
    }: ContentIndexProps
){
    function onProgress(e:React.MouseEvent<HTMLAnchorElement, MouseEvent>){
        e.preventDefault();
        const target = window.document.getElementById(
        e.currentTarget.href.split("#")[1]
        );
        if (target) {
        target.scrollIntoView({ behavior: "smooth" });
        }
        
    }
    return(
        <nav className="sticky top-gap">
            <div className="
                rounded
                flex
                overflow-hidden
                bg-secondary
                lg:flex-col
                lg:w-[15rem]
                lg:sticky 
                lg:top-gap
            ">
                {
                    sectionList.map(section=>
                        <a  
                            key={section}
                            href={'#'+ splitSection(section)}
                            onClick={
                                (e)=> onProgress(e)
                            }
                            className="
                                flex
                                justify-center
                                items-center
                                px-padding
                                py-gap
                                text-white
                                w-full
                                font-bold
                                cursor-pointer
                                transition
                                duration-700
                                ease-in-out
                            "
                            data-to-scrollspy-id={section}
                        >
                            {section}
                        </a>
                    )
                }
            </div>
        </nav>
    )
}

function splitSection(title:string){
    return title.split(" - ")[1] ?? title;
}