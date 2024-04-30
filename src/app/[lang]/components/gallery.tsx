import Image from "next/image"
import { Simplify, TitleSliceDefaultItem } from "../../../../prismicio-types"
import { PrismicNextImage } from "@prismicio/next"

interface GalleryProps{
    images:never[] | Simplify<TitleSliceDefaultItem>[] | undefined
}
export default function Gallery({
    images
}:GalleryProps){
    return (
        <div className="flex gap-gap overflow-hidden w-full lg:min-w-[778px] rounded">
            {
                images?.map(image=>
                    <section
                        key={image.photo.id} 
                        className="rounded bg-primary h-[433px] flex justify-center overflow-hidden w-full relative items-center min-w-[395px] lg:min-w-[678px]"
                    >
                        <PrismicNextImage
                            field={image.photo} 
                            width={1000}
                            height={1000}
                            className="w-full h-full object-cover absolute"
                        />
                    </section>
                )
            }
        </div>
    )
}