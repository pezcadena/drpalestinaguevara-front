"use client"
import Image from "next/image"
import { Simplify, TitleSliceDefaultItem } from "../../../../prismicio-types"
import { PrismicNextImage } from "@prismicio/next"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import clsx from "clsx";

interface GalleryProps{
    images:never[] | Simplify<TitleSliceDefaultItem>[] | undefined
}
export default function Gallery({
    images
}:GalleryProps){
    console.log(images?.length);
    

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
                    images?.map(image=>
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
                                className="rounded h-[433px] flex justify-center overflow-hidden w-full relative items-center min-w-[395px]"
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
        </div>
    )
}

/* <div className="flex gap-gap overflow-hidden w-full lg:min-w-[778px] rounded">
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
        </div> */