"use client"

import Image from "next/image"
import { Dispatch, SetStateAction } from "react";
import { MdMenu } from "react-icons/md";

interface HeaderTitleProps{
    isNavbarVisible: boolean,
    onShowNavbar: Dispatch<SetStateAction<boolean>>
}

export default function HeaderTitle({isNavbarVisible,onShowNavbar}:HeaderTitleProps){
    return (
        <section className="z-40 bg-light">
            <div className="flex justify-center w-full py-gap">
                <div className="flex gap-2 items-center">
                    <Image 
                        src="/img/logo.png"
                        alt="Logo del laboratorio de ecología evolutiva de la BUAP"
                        className="w-28"
                        width={1000}
                        height={1000}
                    />
                    <div>
                        <h2 className="text-h2-bold lg:text-h2-bold-desktop font-serif text-primary">
                            Laboratorio de Ecología Evolutiva
                        </h2>
                        <p>
                            BUAP
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex lg:hidden justify-end">
                <button
                    className="p-mitad-gap bg-secondary rounded-sm"
                    onClick={()=> onShowNavbar(!isNavbarVisible)}
                >
                    <MdMenu className="text-4xl text-white"/>
                </button>
            </div>
        </section>
    )
}