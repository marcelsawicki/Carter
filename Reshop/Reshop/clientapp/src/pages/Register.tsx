import * as React from 'react'
import NavBar from '../components/NavBar';

export class RegisterProps {
   
}

export class RegisterStates {

}

export default class RegisterPage extends React.Component<RegisterProps, RegisterStates> {

    /**
     *
     */
    constructor(props: RegisterProps, states: RegisterStates) {
        super(props);
    }

    render() {
        return <div>
        <div className="App">
          <NavBar />
          <h4>Rejestracja</h4>
        </div>
    </div>
    }
}