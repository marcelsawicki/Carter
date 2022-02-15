import * as React from 'react'
import * as reactDOM from 'react-dom'

export class MenuItem {
    buttonName ?: string;
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
        this.state = { menuItems: [{ buttonName: "Test 1" }, { buttonName: "Test 2" }, { buttonName: "Test 3" }]};   
    }
    render() {
        return <div>
            <nav  className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand">Strona główna</a>
                    <ul className="nav navbar-nav">
                        { this.state.menuItems?.map(function(item,i){
                            return (
                                <li key={i} className="nav-item nav-link active">
                                    <a href="#">{ item.buttonName }</a>
                                </li>
                            );
                        }, this)}
                    </ul>
            </nav>
        </div>
    }
}