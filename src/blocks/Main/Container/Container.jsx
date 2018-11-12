import * as React from 'react';
import { cn } from '@bem-react/classname';
import './Container.scss';

export const cnContainer = cn('Main-Container');

export class Container extends React.Component {
    render() {
        return <div className={cnContainer()}>
            <h1 className={this.props.title.class}>{this.props.title.text}</h1>
            {this.props.children}
        </div>;
    }
}
