import Image from "next/image"
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";

export default function Footer(){
    return(
        <footer className="w-full flex flex-col px-gap py-padding gap-padding lg:flex-row lg:justify-between lg:items-center">
            <div className="flex flex-col gap-padding items-center order-2 lg:flex-row lg:order-1">
                <Image 
                    src="/img/logo.png"
                    alt="Logo del laboratorio de ecología evolutiva de la BUAP"
                    className="w-[16rem]"
                    height={1000}
                    width={1000}
                />
                <div className="flex flex-col gap-gap w-full">
                    <div className="flex flex-col gap-mitad-gap">
                        <p className="font-bold">Título de Contacto</p>
                        <p>Información de contacto</p>
                    </div>
                    <div className="flex flex-col gap-mitad-gap">
                        <p className="font-bold">Título de Contacto</p>
                        <p>Información de contacto</p>
                        <p>Información de contacto</p>
                    </div>
                    <div className="flex flex-col gap-mitad-gap">
                        <p className="font-bold">Título de Contacto</p>
                        <p>Información de contacto</p>
                        <p>Información de contacto</p>
                        <p>Información de contacto</p>
                    </div>
                    <div className="flex justify-between items-center">
                    </div>
                </div>
                <div className="w-full flex justify-between items-center gap-gap">
                    <button className="w-full flex justify-center p-mitad-gap bg-secondary rounded-sm lg:w-fit">
                        <BsInstagram className="text-4xl text-white"/>
                    </button>
                    <button className="w-full flex justify-center p-mitad-gap bg-secondary rounded-sm lg:w-fit">
                        <BsTwitter className="text-4xl text-white"/>
                    </button>
                    <button className="w-full flex justify-center p-mitad-gap bg-secondary rounded-sm lg:w-fit">
                        <BsFacebook className="text-4xl text-white"/>
                    </button>
                </div>
            </div>
            <div className="flex flex-col justify-end gap-padding order-1 lg:order-2 hidden">
                <a>Links</a>
                <a>Links</a>
                <a>Links</a>
                <a>Links</a>
                <a>Links</a>
            </div>
        </footer>
    )
}