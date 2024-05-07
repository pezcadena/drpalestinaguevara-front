"use client"
import { PrismicNextImage } from "@prismicio/next";
import clsx from "clsx";
import { useState } from "react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Lightbox, { SlideImage } from "yet-another-react-lightbox";
import { Simplify, TitleSliceDefaultItem } from "../../../../prismicio-types";

interface CarouselProps{
    images:never[] | Simplify<TitleSliceDefaultItem>[] | undefined
}
export default function Carousel({
    images
}:CarouselProps){
    const [open, setOpen] = useState(false);
    const [imageIndex, setImageIndex] = useState(0);
    let slidesImages: SlideImage[]=[];
    if (images) {
        slidesImages = images.map(image=>({
            src:image.photo.url ?? '',
            alt: image.photo.alt ?? undefined
        }))
    }

    return (
        <div className="w-full lg:min-w-[778px] rounded">
            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={0}
                pagination={{ 
                    clickable: true,
                    bulletActiveClass:'bg-primary opacity-100',
                }}
                className="w-full rounded"
                autoplay={{
                    delay:4000,
                    pauseOnMouseEnter:true,
                }}
                loop={true}
                slidesPerView={'auto'}
            >
                {
                    images?.map((image,index)=>
                        <SwiperSlide
                        key={image.photo.id} 
                        className={
                            clsx(
                                {
                                    "mr-padding lg:mr-gap": images.length > 1
                                }
                            )
                        }
                        >
                            <section
                                className="rounded h-[433px] flex justify-center overflow-hidden w-full relative items-center min-w-[395px] cursor-pointer"
                                onClick={() => {setOpen(true); setImageIndex(index)}}
                            >
                                <PrismicNextImage
                                    field={image.photo} 
                                    width={1000}
                                    height={1000}
                                    className="w-full h-full object-cover absolute"
                                />
                            </section>
                        </SwiperSlide>
                    )
                }
            </Swiper>
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={slidesImages}
                index={imageIndex}
            />
        </div>
    )
}