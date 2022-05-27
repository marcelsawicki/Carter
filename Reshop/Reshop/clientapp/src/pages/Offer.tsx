import * as React from 'react'
import * as reactDOM from 'react-dom'
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import TasksList from '../components/TasksList';

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