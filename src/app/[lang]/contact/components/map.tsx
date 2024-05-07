import Image from "next/image";
export default function Map(){
    return(
        <div className="bg-white w-full rounded overflow-hidden h-[520px]">
            <Image
                alt="Algo"
                src="/img/placeholder.jpg"
                width={1000}
                height={1000}
                className="w-full h-full object-cover"
            />
        </div>
    )
}