import * as React from 'react'
import NavBar from '../components/NavBar';

export class LoginProps {
   
}

export class LoginStates {
    login!: string;
}

export default class LoginPage extends React.Component<LoginProps, LoginStates> {

    /**
     *
     */
    constructor(props: LoginProps, states: LoginStates) {
        super(props);
        this.state={login: "test"};
    }

    processLogin = () => {
        this.setState({login:"logged in"})
    }
    
    processLogout = () => {
        this.setState({login:"logged out"})
    }

    render() {
        return <div>
        <div className="App">
          <NavBar />
          <h4>Login</h4>

          <div className="container-fluid">
                        <div className="my-1">
                            Login: <input className="form-control"></input>
                            Password: <input className="form-control"></input>
                            <button className="btn btn-primary mt-1" onClick={ this.processLogin }> Login </button>
                            <button className="btn btn-primary mt-1" onClick={ this.processLogout }> Logout </button>
                        </div>
                        <h4>Status { this.state.login }</h4>
                    </div>

        </div>
    </div>
    }
}