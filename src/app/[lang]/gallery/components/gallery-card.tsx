"use client"
import Image from "next/image";
import { ActivityDocument, GalleryphotoDocument } from "../../../../../prismicio-types";
import { PrismicNextImage } from "@prismicio/next";
import Lightbox, { SlideImage } from "yet-another-react-lightbox";
import { useState } from "react";
import dayjs from "dayjs";

interface GalleryCardProps{
    photo: GalleryphotoDocument<string> | ActivityDocument<string>
    langDictionary: any
}

export default function GalleryCard({
    photo,
    langDictionary
}:GalleryCardProps){
    const [open, setOpen] = useState(false);
    let slidesImages: SlideImage[]=[];
    if (photo) {
        slidesImages.push({
            src:photo.data.photo.url ?? (photo.data.link_external_photo as any).url,
            alt: photo.data.photo.alt ?? undefined
        })
    }
    let expired = false;
    let isActivity = false;
    if ((photo as ActivityDocument<string>).data.full_date ) {
        isActivity = true;
        expired = dayjs((photo as ActivityDocument<string>).data.full_date).isBefore(dayjs());
    }
    
    return(
        <article className="w-full flex flex-col justify-center rounded overflow-hidden bg-white">
            <header>
                {
                    expired &&
                    <div className="bg-red-700 text-white p-gap font-bold text-center">
                        {langDictionary.gallery.expired}
                    </div>
                }
                <div className="w-full h-full cursor-pointer" onClick={()=>{setOpen(true)}}>
                    {
                        photo.data.photo &&
                            <PrismicNextImage 
                                field={photo.data.photo} 
                                className="w-full h-full object-cover"
                            />
                    }
                    {
                        (photo.data.link_external_photo as any).url &&
                            <Image
                                alt="Foto Externa"
                                src={(photo.data.link_external_photo as any).url}
                                width={1000}
                                height={1000}
                                className="w-full h-full object-cover"
                            />
                    }
                </div>
            </header>
            {
                (   
                    photo.data.title ||
                    photo.data.short_description ||
                    isActivity
                ) &&
                    <footer className="p-gap bg-secondary cursor-pointer text-white lg:bg-white lg:text-secondary lg:cursor-default">
                        {
                            isActivity && 
                                <p>{dayjs((photo as ActivityDocument<string>).data.full_date).format("DD/MM/YYYY")}</p>
                        }
                        {
                            photo.data.title && 
                                <b>{photo.data.title}</b>
                        }
                        {
                            photo.data.short_description && 
                                <p>{photo.data.short_description}</p>
                        }
                    </footer>
            }
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={slidesImages}
            />
        </article>
    );
}