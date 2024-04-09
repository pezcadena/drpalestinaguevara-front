import Separator from "./separator";

interface SubtitleProps {
    label: string;
}
export default function Subtitle({label}:SubtitleProps){
    return(
        <div className="p-padding rounded bg-white text-primary flex flex-col justify-center">
            <h2 className="text-h2-bold-desktop font-serif">
                {label}
            </h2>
            <Separator/>
        </div>
    )
}