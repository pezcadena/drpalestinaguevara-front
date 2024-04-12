import Link from "next/link";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    href: string | null;
}

export default function ButtonLink({label, href}:ButtonProps){
    return(
        <Link 
            className="py-gap text-white underline flex w-full justify-center text-nowrap hover:bg-sky-700 cursor-pointer"
            href={href ?? ''}
        >
            {label}
        </Link>
    )
}