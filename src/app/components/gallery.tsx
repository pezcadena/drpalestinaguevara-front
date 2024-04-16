import Image from "next/image"
export default function Gallery(){
    return (
        <section className="rounded bg-primary h-[433px] flex justify-center overflow-hidden w-full relative items-center min-w-[778px]">
            <Image 
                src="/img/placeholder.jpg"
                alt="Logo del laboratorio de ecología evolutiva de la BUAP"
                className="w-full absolute"
                width={1000}
                height={1000}
            />
        </section>
    )
}