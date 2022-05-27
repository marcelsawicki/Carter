import * as React from 'react'
import * as reactDOM from 'react-dom'
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import TasksList from '../components/TasksList';

export class MessageProps {
   
}

export class MessageStates {
   userName!: string;
}

export default class HomePage extends React.Component<MessageProps, MessageStates> {

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
        <div className="App">
          <NavBar />
          <TasksList />
        </div>
    </div>
    }
}