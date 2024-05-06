import Image from "next/image";
export default function Student(){
    return(
        <article className="w-full rounded bg-white">
            <header className="flex flex-col pt-padding gap-gap px-padding lg:flex-row lg:items-center">
                <div className="w-32 h-32 rounded overflow-hidden">
                    <Image
                        alt="Algo"
                        src="/img/placeholder.jpg"
                        width={1000}
                        height={1000}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="py-gap w-full lg:w-auto">
                    <h3
                        className="text-primary font-serif text-h2-bold lg:text-h3-bold-desktop"
                    >Nombre de la persona</h3>
                    <p
                        className="text-primary"
                    >Escuela</p>
                </div>
            </header>
            <div className="p-padding pt-gap">
                <p
                    className="text-justify"
                >Párrafo sobre la persona. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.</p>
            </div>
        </article>
    )
}