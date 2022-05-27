import * as React from 'react'
import * as reactDOM from 'react-dom'

export class TodoBannerProps {
   name!: string;
   tasks: Array<ITask> = [];
}

export class TodoBannerStates {

}

export interface ITask{
    action: string;
    done: boolean
}

export default class TodoBanner extends React.Component<TodoBannerProps, TodoBannerStates> {

    /**
     *
     */
    constructor(props: TodoBannerProps, states: TodoBannerStates) {
        super(props);
    }

    render = () => 
        <div>
            <h4 className="bg-primary text-white text-center p-2">
                Lista zadań użytkowania { this. props.name }
                (Lista zadań: { this.props.tasks.filter(t => !t.done).length })
            </h4>
        </div>
}