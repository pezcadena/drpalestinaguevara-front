import clsx from "clsx";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    href: string | null;
    onClickLink: Dispatch<SetStateAction<boolean>>,
    isActive: boolean
}

export default function ButtonLink({label, href, onClickLink, isActive}:ButtonProps){
    return(
        <Link 
            className={
                clsx(
                    "py-gap text-white flex justify-center text-nowrap hover:bg-sky-700 cursor-pointer transition-all ease-in-out lg:duration-300 px-gap",
                    {
                        "w-full bg-primary":isActive,
                    }
                )
            }
            href={href ?? ''}
            onClick={()=>onClickLink(false)}
        >
            {label}
        </Link>
    )
}