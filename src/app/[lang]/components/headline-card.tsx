import { PrismicRichText } from "@prismicio/react";
import { PageDescriptionSlice, TitleSlice } from "../../../../prismicio-types";

interface HeadlineCardProps{
    titleSlice?: TitleSlice,
    titleText?:string,
    subtitle?: PageDescriptionSlice
    | TitleSlice,
}

export default function HeadlineCard({titleSlice, subtitle, titleText}:HeadlineCardProps){
    if (titleSlice) {
        return (
            <article className="flex flex-col gap-gap p-padding justify-center bg-primary rounded h-full">
                <h1 className="text-h3-bold-desktop text-white font-serif">
                    <PrismicRichText field={titleSlice.primary.title} />
                </h1>
                <span className="text-white text-justify">
                    <PrismicRichText field={subtitle?.primary.description} />
                </span>
            </article>
        )
    }
    if (titleText) {
        return (
            <article className="flex flex-col gap-gap p-padding justify-center bg-primary rounded h-full">
                <h1 className="text-h3-bold-desktop text-white font-serif">
                    {titleText}
                </h1>
            </article>
        )
    }
    return (
        <article className="flex flex-col gap-gap p-padding justify-center bg-primary rounded h-full">
            <span className="text-white text-justify">
                <PrismicRichText field={subtitle?.primary.description} />
            </span>
        </article>
    )
}