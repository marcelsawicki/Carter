import * as React from 'react'
import * as reactDOM from 'react-dom'

export class MessageProps {
   
}

export default class Message extends React.Component<MessageProps, {}> {

    /**
     *
     */
    constructor(props: MessageProps) {
        super(props);
    }
    render() {
        return <div>
           Sklep internetowy
        </div>
    }
}