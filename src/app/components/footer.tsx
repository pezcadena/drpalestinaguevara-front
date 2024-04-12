import Image from "next/image"

export default function Footer(){
    return(
        <footer className="w-full flex justify-between px-gap py-padding items-center">
            <div className="flex gap-padding items-center">
                <Image 
                    src="/img/logo.png"
                    alt="Logo del laboratorio de ecología evolutiva de la BUAP"
                    className="w-[16rem]"
                    height={1000}
                    width={1000}
                />
                <div className="flex flex-col gap-gap">
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
            </div>
            <div className="flex flex-col justify-end gap-padding">
                <a>Links</a>
                <a>Links</a>
                <a>Links</a>
                <a>Links</a>
                <a>Links</a>
            </div>
        </footer>
    )
}