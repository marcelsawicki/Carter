import * as React from 'react'
import * as reactDOM from 'react-dom'

export class TodoCreatorProps {
   callback!: (item: string) => void;
}

export class TodoCreatorStates {
    newItemText!: string;
}

export interface ITask{
    action: string;
    done: boolean;
}

export default class TodoCreator extends React.Component<TodoCreatorProps, TodoCreatorStates> {

    /**
     *
     */
    constructor(props: TodoCreatorProps, states: TodoCreatorStates) {
        super(props);
        this.state = { newItemText: "" };
    }

    updateNewTextValue = (event: any) => {
        this.setState({ newItemText: event.target.value });
    }

    createNewTodo = () => {
        this.props.callback(this.state.newItemText);
        this.setState({ newItemText: "" });

    }

    render = () => 
    <div>
        <input className="form-control" value={ this.state.newItemText } onChange={ this.updateNewTextValue }></input> 
        <button className="btn btn-primary mt-1" onClick={ this.createNewTodo }>Nowe zadanie</button>
    </div>
}