import Image from "next/image"
import placeholder from "@/app/assets/img/placeholder.jpg"
export default function Gallery(){
    return (
        <section className="rounded bg-primary h-[433px] flex justify-center overflow-hidden w-full relative items-center">
            <Image 
                src={placeholder}
                alt="Logo del laboratorio de ecología evolutiva de la BUAP"
                className="w-full absolute"
            />
        </section>
    )
}