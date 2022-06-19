import * as React from 'react'
import { Link } from 'react-router-dom';

export class CategoryNavigationProps {
    baseUrl!: string;
    categories!: string[];
}

export class CategoryNavigationStates {

}

export default class CatgeoryNavigation extends React.Component<CategoryNavigationProps, CategoryNavigationStates> {

    /**
     *
     */
    constructor(props: CategoryNavigationProps, states: CategoryNavigationStates) {
        super(props);    
    }

    render() {
        return <React.Fragment>
            <Link className='btn btn-secondary btn-block' to={ this.props.baseUrl }> Wszystkie </Link>
            { this.props.categories && this.props.categories.map(cat => 
            <Link className="btn btn-secondary btn-block" key={ cat } to={`${this.props.baseUrl}/${cat.toLowerCase()}`}> 
                { cat } 
            </Link>
            )}
        </React.Fragment>
    }
}