import Image from "next/image";
export default function Map(){
    return(
        <div className="bg-white w-full rounded overflow-hidden h-[510px]">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30179.875604612138!2d-98.19388325792832!3d18.998362806317264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cfbf67a87395e3%3A0x56ee1d75fcea295c!2sBUAP%3A%20Estadio%20Ol%C3%ADmpico!5e0!3m2!1ses!2smx!4v1715694246494!5m2!1ses!2smx" className="w-full h-full rounded" allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    )
}