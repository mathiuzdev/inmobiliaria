import { NavLink } from "react-router-dom";
import listaNav from "../helpers/listasDinamicas";
import { useEffect } from "react";

const lista = listaNav();

export const Nav = () => {
    useEffect(() => {
        window.scrollTo(0, 0); 
    }, []);

    return (
        <nav className="w-full h-24 ">
            <ul className="flex bg-colorLogo w-full justify-end h-24 items-center space-x-4 pr-5">
                {lista.map((list, index) => (
                    <li
                        className="inline-block
                        font-bold
                        text-gray-600
                        relative
                        cursor-pointer
                        transition-all
                        duration-500
                        before:content-['']
                        before:absolute
                        before:-bottom-0.5
                        before:left-0
                        before:w-0
                        before:h-0.5
                        before:opacity-0
                        before:transition-all
                        before:duration-500
                        before:bg-black

                        hover:before:w-full
                        hover:text-black
                        hover:before:opacity-100"
                        key={index}
                    >
                        <NavLink to={list.link}>{list.title}</NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
