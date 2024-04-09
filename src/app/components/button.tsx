interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
}

export default function Button({label}:ButtonProps){
    return(
        <a className="py-gap text-white underline flex w-full justify-center text-nowrap hover:bg-sky-700 cursor-pointer">
            {label}
        </a>
    )
}