import * as React from 'react'
import Banner from '../components/Banner';
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
        this.state={ login: "login" };
    }

    processLogin = () => {
        if(this.state.login=="login")
        {
            this.setState({ login:"logout" })
        }
        else
        {
            this.setState({ login:"login" })
        }
        
    }
    
    processLogout = () => {
        this.setState({ login:"login" })
    }

    render() {
        return <div>
        <div className="App">
          <NavBar />
          <Banner title="Logowanie"></Banner>

          <div className="container-fluid">
                        <div className="my-1">
                            Login: <input className="form-control"></input>
                            Password: <input className="form-control"></input>
                            <button className="btn btn-primary mt-1" onClick={ this.processLogin }> { this.state.login } </button>
                        </div>
                        <h4>Status { this.state.login }</h4>
                    </div>

        </div>
    </div>
    }
}