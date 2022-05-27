import * as React from 'react'
import * as reactDOM from 'react-dom'

export class TodoRowProps {
   item!: ITask;
   callback!: (item: ITask) => void;
}

export class TodoRowStates {

}

export interface ITask{
    action: string;
    done: boolean;
}

export default class TodoRow extends React.Component<TodoRowProps, TodoRowStates> {

    /**
     *
     */
    constructor(props: TodoRowProps, states: TodoRowStates) {
        super(props);
    }

    render = () => 
    <tr>
        <td>{ this.props.item.action }</td>
        <td>
            <input type="checkbox" checked={ this.props.item.done } onChange={ () => this.props.callback(this.props.item) }></input>
        </td>
    </tr>
        
}