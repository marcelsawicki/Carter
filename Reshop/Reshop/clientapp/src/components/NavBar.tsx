import * as React from 'react'
import * as reactDOM from 'react-dom'
import { Link } from 'react-router-dom';

export class MenuItem {
    buttonName ?: string;
    url!: string;
}

export class NavBarProps {
    menuItems ?: MenuItem[];
}

export default class navBar extends React.Component<NavBarProps, {}> {
    state: NavBarProps;
    /**
     *
     */
    constructor(props: NavBarProps) {
        super(props);
        this.state = { menuItems: [
        { buttonName: "Strona główna", url: "" },     
        { buttonName: "Oferta", url: "offer" }, 
        { buttonName: "Koszyk", url: "cart" }, 
        { buttonName: "Produkty", url: "product" }, 
        { buttonName: "Rejestracja", url: "register" }, 
        { buttonName: "Logowanie", url: "login" }]};   
    }
    render() {
        return <div>
            <nav  className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand">Sklep internetowy</a>
                    <ul className="nav navbar-nav">
                        { this.state.menuItems?.map(function(item,i){
                            return (
                                <li key={i} className="nav-item nav-link active">
                                    <Link to={"/" + item.url?.toLowerCase() } > { item.buttonName } </Link>
                                </li>
                            );
                        }, this)}
                    </ul>
            </nav>
            </div>
    }
}