import Button from "./button";

export default function Navbar(){

    const pages = [
        'Inicio',
        'Publicaciones',
        'Investigación',
        'Alumnos',
        'Colaboradores',
        'Dra. Palestina-Guevara',
        'Galería',
        'Actividades',
        'Contacto'
    ]

    return(
        <nav className="flex w-full bg-secondary rounded overflow-hidden">
            {
                pages.map(page=>
                    <Button 
                        label={page}
                        key={page}
                    />
                )
            }
        </nav>
    )
}