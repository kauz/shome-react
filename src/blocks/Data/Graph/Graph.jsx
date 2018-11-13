import * as React from 'react';
import { cn } from '@bem-react/classname';

export const cnGraph = cn('Graph');

export class Graph extends React.Component {
    render() {
        return <img className={cnGraph(null, [this.props.mixClass, "Event-Img"])} src={this.props.src} alt=''/>;
    }
}
