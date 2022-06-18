import * as React from 'react'
import NavBar from '../components/NavBar';
import ProductList from '../components/ProductList';
import { IProduct } from '../data/IProduct';
import { data } from '../data/productData';
import { categoryData } from '../data/categoryData';
import Banner from '../components/Banner';

export class OfferProps {
   
}

export class OfferStates {

}

export default class OfferPage extends React.Component<OfferProps, OfferStates> {

    /**
     *
     */
    products: Array<IProduct> = data;
    constructor(props: OfferProps, states: OfferStates) {
        super(props);
    }

    render() {
        return <div>
        <div className="App">
          <NavBar />
          <Banner title="Oferta"></Banner>
          <ProductList products={this.products}></ProductList>
        </div>
    </div>
    }
}