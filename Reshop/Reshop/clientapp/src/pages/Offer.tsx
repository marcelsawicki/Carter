import * as React from 'react'
import NavBar from '../components/NavBar';

export class OfferProps {
   
}

export class OfferStates {

}

export default class OfferPage extends React.Component<OfferProps, OfferStates> {

    /**
     *
     */
    constructor(props: OfferProps, states: OfferStates) {
        super(props);
    }

    render() {
        return <div>
        <div className="App">
          <NavBar />
          <h4>Oferta</h4>
        </div>
    </div>
    }
}