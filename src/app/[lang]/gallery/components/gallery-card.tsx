import Image from "next/image";

export default function GalleryCard(){
    return(
        <article className="w-full flex flex-col justify-center rounded overflow-hidden bg-white">
            <header>
                <div className="w-full h-full">
                    <Image
                        alt="Algo"
                        src="/img/placeholder.jpg"
                        width={1000}
                        height={1000}
                        className="w-full h-full object-cover"
                    />
                </div>
            </header>
            <footer className="p-gap bg-secondary cursor-pointer text-white lg:bg-white lg:text-secondary lg:cursor-default">
                <b>Titulo Opcional</b>
                <p>Descripción Breve Opcional</p>
            </footer>
        </article>
    );
}