import * as React from 'react';
import { cn } from '@bem-react/classname';
import './Button.scss';

export const cnButton = cn('Button');

export class Button extends React.Component {

    render() {
        return <button className={cnButton(this.props.isPrimary, [this.props.mixClass])}>{this.props.text}</button>;
    }
}