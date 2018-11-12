import * as React from 'react';
import {cn} from '@bem-react/classname';
import {Icon} from "../Icon/Icon";
import {Data} from "../Data/Data";
import './Event.scss';

export const cnEvent = cn('Event');

export class Event extends React.Component {


    getBody() {
        if (this.props.event.description) {
            return <div className={cnEvent('Body')}>{this.props.event.description}</div>;
        }
    }

    getData() {
        if (this.props.event.data) {
            return <Data mixClass={cnEvent('Data')} data={this.props.event.data}/>
        }
    }

    render() {
        return <div className={cnEvent({size: this.props.event.size, type: this.props.event.type})}>
            <i className={cnEvent('Hide')}/>
            <div className={cnEvent('Heading')}>
                <Icon mixClass={cnEvent('Icon')} type={this.props.event.icon}/>
                <p className={cnEvent('Title')}>{this.props.event.title}</p>
            </div>
            <div className={cnEvent('Status')}>
                <div className={cnEvent('Source')}>{this.props.event.source}</div>
                <div className={cnEvent('Time')}>{this.props.event.time}</div>
            </div>
            {this.getBody()}
            {this.getData()}
            <i className={cnEvent('Go')}/>
        </div>;
    }
}
