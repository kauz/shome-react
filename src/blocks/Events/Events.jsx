import * as React from 'react';
import { cn } from '@bem-react/classname';
import {Event} from "../Event/Event"
import './Events.scss';

export const cnEvents = cn('Events');

const API = 'https://kauz.github.io/YASHRI-2018/src/data/events.json';

export class Events extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            events: [],
        };
    }

    componentDidMount() {
        fetch(API)
            .then(response => response.json())
            .then(data => this.setState({ events: data.events }));
    }


    render() {
        const { events } = this.state;

        return (
            <div className={cnEvents()}>
                {events.map((event, index) =>
                    <Event key={index} event={event}/>
                )}
            </div>
        );
    }


}