import Image from "next/image";

export default function ResearchCard(){
    return(
        <article className="bg-white rounded overflow-hidden">
            <header className="overflow-hidden lg:h-[400px]">
                <Image
                    alt="Algo"
                    src="/img/placeholder.jpg"
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover"
                />
            </header>
            <div className="flex flex-col gap-gap p-padding pt-gap w-full">
                <div className="py-gap text-primary">
                    <h3 className="text-h2-bold font-serif">Título de la investigación</h3>
                    <p>Fecha de la investigación</p>
                </div>
                <div className="flex flex-col gap-mitad-gap lg:flex-row lg:gap-12">
                    <div className="flex flex-col gap-mitad-gap">
                        <b>Colaboradores:</b>
                        <p>Colaborador</p>
                        <p>Colaborador</p>
                        <p>Colaborador</p>
                        <p>Colaborador</p>
                    </div>
                    <div className="flex flex-col gap-mitad-gap">
                        <b>Tesistas:</b>
                        <p>Colaborador</p>
                        <p>Colaborador</p>
                    </div>
                </div>
                <p className="text-justify">
                    Párrafo de la investigación. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.
                </p>
            </div>
            <footer className="p-gap bg-secondary text-center text-white cursor-pointer lg:bg-white lg:text-start lg:text-secondary lg:cursor-default lg:px-padding lg:pt-0">
                <span className="cursor-pointer">Link Opcional</span>
            </footer>
        </article>
    )
}