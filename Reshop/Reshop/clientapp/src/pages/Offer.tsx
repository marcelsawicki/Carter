import * as React from 'react'
import NavBar from '../components/NavBar';
import ProductList from '../components/ProductList';
import { IProduct } from '../data/IProduct';
import { data } from '../data/productData';
import { categoryData } from '../data/categoryData';
import Banner from '../components/Banner';
import CatgeoryNavigation from '../components/CategoryNavigation';

export class OfferProps {
   
}

export class OfferStates {

}

export default class OfferPage extends React.Component<OfferProps, OfferStates> {

    /**
     *
     */
    products: Array<IProduct> = data;
    categories: string[] = categoryData;
    constructor(props: OfferProps, states: OfferStates) {
        super(props);
    }

    render() {
        return <div>
        <div className="App">
          <NavBar />
          <Banner title="Oferta"></Banner>
          <div className="container-fluid">
            <div className="row">
                <div className="col-3 p-2">
                    <CatgeoryNavigation baseUrl='/products' categories={ this.categories }></CatgeoryNavigation>
                </div>
                <div className="col-9 p-2">
                    <ProductList products={this.products}></ProductList>
                </div>
            </div>
          </div>
          
        </div>
    </div>
    }
}