import * as React from 'react'
import Banner from '../components/Banner';
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
    registerProcess() {
        alert("Registered");
    }
    render() {
        return <div>
        <div className="App">
          <NavBar />
          <Banner title="Rejestracja"></Banner>

          <div className="container-fluid">
                        <div className="my-1">
                            Name: <input className="form-control"></input>
                            Surname: <input className="form-control"></input>
                            Email: <input className="form-control"></input>
                            Login: <input className="form-control"></input>
                            Password: <input className="form-control"></input>
                            <button className="btn btn-primary mt-1" onClick={ this.registerProcess }> Register </button>
                        </div>
                    </div>
        </div>
    </div>
    }
}