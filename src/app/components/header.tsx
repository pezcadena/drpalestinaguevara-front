import Image from "next/image"
import logo from "@/app/assets/img/logo.png"

export default function Header(){
    return (
        <section>
            <div className="flex justify-center w-full py-gap">
                <div className="flex gap-2 items-center">
                    <Image 
                        src={logo}
                        alt="Logo del laboratorio de ecología evolutiva de la BUAP"
                        className="w-28"
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