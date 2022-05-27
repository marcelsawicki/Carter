import * as React from 'react'
import * as reactDOM from 'react-dom'
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';

export class CartProps {
   
}

export class CartStates {
   userName!: string;
}

export default class CartPage extends React.Component<CartProps, CartStates> {

    /**
     *
     */
    constructor(props: CartProps, states: CartStates) {
        super(props);
    }

    render() {
        return <div>
        <div className="App">
          <NavBar />
         <h4>Koszyk</h4>
        </div>
    </div>
    }
}