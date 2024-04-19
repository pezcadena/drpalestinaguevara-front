import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    href: string | null;
    onClickLink: Dispatch<SetStateAction<boolean>>
}

export default function ButtonLink({label, href, onClickLink}:ButtonProps){
    return(
        <Link 
            className="py-gap text-white underline flex w-full justify-center text-nowrap hover:bg-sky-700 cursor-pointer"
            href={href ?? ''}
            onClick={()=>onClickLink(false)}
        >
            {label}
        </Link>
    )
}