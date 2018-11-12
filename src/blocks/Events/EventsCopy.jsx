import * as React from 'react';
import { cn } from '@bem-react/classname';
import {Event} from "../Event/Event"
import './Events.scss';

export const cnEvents = cn('Events');

export class Events extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            events: [],
            isLoading: false
        };
    }

    loadData() {
        fetch('https://kauz.github.io/YASHRI-2018/src/data/events.json')
            .then(response => response.json())
            .then(data => {
                this.setState({events: data, isLoading: false});
            })
            .catch(err => console.error(err.toString()))
    }

    componentDidMount() {
        this.setState({ isLoading: true });
        this.loadData()
    }

    render() {

        let {events, isLoading} = this.state;

        if (isLoading) {
            return <p>Loading ...</p>;
        } else {
            return (

                    <ul>
                        {events.forEach((event) => {
                            console.log(event);
                        })};
                    </ul>
            )
        }


    }
}
