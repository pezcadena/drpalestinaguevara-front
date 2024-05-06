import Subtitle from "../../components/subtitle";
import Student from "./student";

export default function StudentList(){
    return(
        <section className="flex flex-col gap-gap">
            <Subtitle
                label="Subtitulo"
            />
            <div className="flex flex-wrap -m-mitad-gap">
                <div className="grow lg:basis-1/2 p-mitad-gap">
                    <Student/>
                </div>
                <div className="grow lg:basis-1/2 p-mitad-gap">
                    <Student/>
                </div>
                <div className="grow lg:basis-1/2 p-mitad-gap">
                    <Student/>
                </div>
            </div>
        </section>
    )
}