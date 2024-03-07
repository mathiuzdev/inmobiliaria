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
        title: "TASACIONES",
        link: "/tasaciones"
    },{
        title: "CONTACTO",
        link: "/contacto"
    }]
}

export default listaNav