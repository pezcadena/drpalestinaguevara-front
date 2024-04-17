import { PrismicRichText } from "@prismicio/react";
import { PageDescriptionSlice, TitleSlice } from "../../../prismicio-types";

interface HeadlineCardProps{
    title?: TitleSlice,
    subtitle?: PageDescriptionSlice
    | TitleSlice,
}

export default function HeadlineCard({title, subtitle}:HeadlineCardProps){
    return (
        <article className="flex flex-col gap-gap p-padding justify-center bg-primary rounded h-full">
            <h1 className="text-h3-bold-desktop text-white font-serif">
                <PrismicRichText field={title?.primary.title} />
            </h1>
            <span className="text-white">
                <PrismicRichText field={subtitle?.primary.description} />
            </span>
        </article>
    )
}