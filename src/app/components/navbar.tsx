import ButtonLink from "./button-link";

export default function Navbar(){

    const pages = [
        {
            name:'Inicio',
            href: '/'
        },
        {
            name:'Publicaciones',
            href: '/publications'
        },
        {
            name:'Investigación',
            href: null
        },
        {
            name:'Alumnos',
            href: null
        },
        {
            name:'Colaboradores',
            href: null
        },
        {
            name:'Dra. Palestina-Guevara',
            href: null
        },
        {
            name:'Galería',
            href: null
        },
        {
            name:'Actividades',
            href: null
        },
        {
            name:'Contacto',
            href: null
        },
    ]

    return(
        <nav className="flex w-full bg-secondary rounded overflow-hidden">
            {
                pages.map(page=>
                    <ButtonLink 
                        label={page.name}
                        key={page.name}
                        href={page.href}
                    />
                )
            }
        </nav>
    )
}