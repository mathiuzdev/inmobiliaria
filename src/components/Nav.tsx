interface ListaProps {
    lista: string[];
}

export const Nav = ({ lista }: ListaProps) => (
    <nav className="w-full h-24">
        <ul className="flex bg-blue-500 w-full justify-end h-24 items-center space-x-4 pr-5">
            {lista.map((title, index) => (
                <li className="text-blue-500" key={index}>
                    {title}
                </li>
            ))}
        </ul>
        
    </nav>
    
);
