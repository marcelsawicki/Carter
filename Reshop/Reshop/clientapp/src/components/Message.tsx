import * as React from 'react'
import * as reactDOM from 'react-dom'

export class MessageProps {
   
}

export class MessageStates {
   userName!: string;
}

export default class Message extends React.Component<MessageProps, MessageStates> {

    /**
     *
     */
    constructor(props: MessageProps, states: MessageStates) {
        super(props);
        this.state = {
            userName: "Adam"
        }
    }

    changeStateData = () => {
        this.setState({
            userName: this.state.userName === "Henryk" ? "Fryderyk" : "Henryk"
        })
        
    }

    render() {
        return <div>
           Sklep internetowy
           <h4> {this.state.userName} </h4>
           <button className="btn btn-primary m-2" onClick={this.changeStateData}>Przycisk wyboru</button>
        </div>
    }
}