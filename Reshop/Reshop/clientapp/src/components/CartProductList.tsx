import * as React from 'react'
import { IProduct } from '../data/IProduct'



export class CartProductListProps {
   products!: string[];
}

export class CartProductListStates {

}

export default class CartProductList extends React.Component<CartProductListProps, CartProductListStates> {

    /**
     *
     */
    constructor(props: CartProductListProps, states: CartProductListStates) {
        super(props);    
    }

    render() {
        if(this.props.products == null || this.props.products.length ===0 )
        {
            return <h5 className='p-2'>Brak produktów</h5>
        }

        return this.props.products.map(p =>
            <div className="card m-1 p-1 bg-light" key={ Math.random() }>
                <h4> 
                    { p } 
                </h4>
            </div>
            )
    }
}