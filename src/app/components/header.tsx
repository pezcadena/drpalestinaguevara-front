import Image from "next/image"

export default function Header(){
    return (
        <section>
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
                        <h2 className="text-h2-bold-desktop font-serif text-primary">
                            Laboratorio de Ecología Evolutiva
                        </h2>
                        <p>
                            BUAP
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}