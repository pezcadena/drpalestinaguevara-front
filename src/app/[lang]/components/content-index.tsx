"use client"

import React from "react";

export interface ContentIndexProps{
    sectionList:{
        title:string,
        id:string
    }[],
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
                bg-white
                lg:flex-col
                lg:w-[15rem]
                lg:sticky 
                lg:top-gap
            ">
                {
                    sectionList.map(section=>
                        <a  
                            key={section.id}
                            href={'#'+ section.id}
                            onClick={
                                (e)=> onProgress(e)
                            }
                            className="
                                flex
                                justify-center
                                items-center
                                px-padding
                                py-gap
                                text-secondary
                                w-full
                                font-bold
                                cursor-pointer
                                transition
                                duration-700
                                ease-in-out
                            "
                            data-to-scrollspy-id={section.id}
                        >
                            {section.title}
                        </a>
                    )
                }
            </div>
        </nav>
    )
}