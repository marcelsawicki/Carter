import * as React from 'react'
import { IProduct } from '../data/IProduct'

export class ProductListProps {
   products!: Array<IProduct>;
}

export class ProductListStates {

}

export default class ProductList extends React.Component<ProductListProps, ProductListStates> {

    /**
     *
     */
    constructor(props: ProductListProps, states: ProductListStates) {
        super(props);    
    }

    addToCart(product: IProduct)
    {
        let dataToAdd: string[] = [];
        let dataToParse = sessionStorage.getItem('products');
        if(dataToParse!=null)
        {
            let dataParesed = JSON.parse(dataToParse);
            dataToAdd = dataParesed;
        }
        
        
        dataToAdd.push(product.name);
        sessionStorage.setItem('products', JSON.stringify(dataToAdd));
        alert('Dodano do koszyka ' + product.name + '. W koszyku jest razem: ' + JSON.stringify(dataToAdd));
    }

    render() {
        if(this.props.products == null || this.props.products.length ===0 )
        {
            return <h5 className='p-2'>Brak produktów</h5>
        }

        return this.props.products.map(p =>
            <div className="card m-1 p-1 bg-light" key={ p.id }>
                <h4> 
                    { p.name } 
                    <span className="badge badge-pill badge-primary float-right">
                        { p.price.toFixed(2) } zł
                    </span>
                </h4>
                <div className="card-text bg-white p-1">
                    { p.description }
                    <button className="btn btn-success btn-sm float-right" onClick={ () => this.addToCart(p) }>
                        Dodaj do koszyka
                    </button>
                </div>
            </div>
            )
    }
}