import * as React from 'react'
import * as reactDOM from 'react-dom'
import TodoBanner from './TodoBanner';

export class TasksListProps {
   
}

export class TasksListStates {
   userName!: string;
   todoItems: Array<ITodoItem> = [];
   newItemText!: string;
}

export interface ITodoItem {
    action: string,
    done: boolean
}

export default class TasksList extends React.Component<TasksListProps, TasksListStates> {

    /**
     *
     */
    constructor(props: TasksListProps, states: TasksListStates) {
        super(props);
        this.state = {
            userName: "Henryk",
            todoItems: [ {action: "Ekran logowania", done: false},
                         {action: "Oferta produktowa", done: false},
                         {action: "Koszyk", done: true},
                         {action: "Realizacja zamówienia", done: false},
                         {action: "Historia zamówień", done: false},
                         {action: "Panel administratora - dodawanie/usuwanie/edytowanie produków", done: false} ],
            newItemText: ""
        }
    }

    changeStateData = () => {
        this.setState({
            userName: this.state.userName === "Henryk" ? "Fryderyk" : "Henryk"
        })
        
    }

    updateNewTextValue = (event: any ) => {
        if(event != null && event.target != null)
        {
            this.setState({ newItemText: event.target.value })
        }
    }

    createNewTodo = () => {
        if(!this.state.todoItems.find(item => item.action === this.state.newItemText)) 
        {
            this.setState({
                todoItems: [...this.state.todoItems, {action: this.state.newItemText, done: false }],
                newItemText: ""
            });
        }
    }

    toggleTodo = (todo: any) => this.setState({
        todoItems: this.state.todoItems.map(item => item.action === todo.action ? { ...item, done: !item.done } : item)
    });
    todoTableRows = () => this.state.todoItems.map(item =>
        <tr key={ item.action }>
            <td>{ item.action }</td>
            <td> 
                <input type="checkbox" checked={ item.done } onChange={() => this.toggleTodo(item)} />
            </td>
        </tr>
        );

    render = () => 
        <div>
                    <TodoBanner name={this.state.userName } tasks={this.state.todoItems}></TodoBanner>

                    <div className="container-fluid">
                        <div className="my-1">
                            <input className="form-control" value={ this.state.newItemText } onChange={ this.updateNewTextValue }></input>
                            <button className="btn btn-primary mt-1" onClick={ this.createNewTodo }> Dodaj zadanie </button>
                        </div>
                    </div>

                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr><th>Opis</th><th>Wykonane</th></tr>
                        </thead>
                        <tbody>{ this.todoTableRows() }</tbody>

                    </table>

                    <button className="btn btn-primary m-2" onClick={ this.changeStateData } >
                        Zmień uzytkownika
                    </button>
        </div>
}