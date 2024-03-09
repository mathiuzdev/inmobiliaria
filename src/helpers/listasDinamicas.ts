interface NavItem {
    title: string;
    link: string;
}
const listaNav = (): NavItem[] => {
    return [{
        title: "COMPRAR",
        link: "/comprar"
    },{
        title: "ALQUILAR",
        link: "/alquilar"
    },{
        title: "TASÁ AHORA",
        link: "/tasaciones"
    },{
        title: "CONTACTO",
        link: "/contacto"
    }]
}

export default listaNav