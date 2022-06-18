import * as React from 'react'
import * as reactDOM from 'react-dom'
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';
import CartProductList from '../components/CartProductList';
import NavBar from '../components/NavBar';

export class CartProps {
}

export class CartStates {
   produ: string[] = [];
}

export default class CartPage extends React.Component<CartProps, CartStates> {

    /**
     *
     */
    constructor(props: CartProps, states: CartStates) {
        super(props);
        this.state = { produ: this.readCart() };
    }

    readCart(): string[]
    {
        let dataToParse = sessionStorage.getItem('products');
        if(dataToParse!=null)
        {
            let dataParesed = JSON.parse(dataToParse);
            return dataParesed;
        }
        return [];
        
    }

    render() {
        return <div>
        <div className="App">
          <NavBar />
          <Banner title="Koszyk"></Banner>
          <CartProductList products={ this.readCart() }></CartProductList>
        </div>
    </div>
    }
}