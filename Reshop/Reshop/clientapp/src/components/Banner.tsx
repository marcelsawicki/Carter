import * as React from 'react'

export class BannerProps {
    title!: string;
}

export class BannerStates {

}


export default class Banner extends React.Component<BannerProps, BannerStates> {

    /**
     *
     */
    constructor(props: BannerProps, states: BannerStates) {
        super(props);
    }

    render = () => 
        <div>
            <h4 className="bg-primary text-white text-center p-2">
                { this.props.title }
            </h4>
        </div>
}