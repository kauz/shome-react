import * as React from 'react';
import { cn } from '@bem-react/classname';
import './Icon.scss';

export const cnIcon = cn('Icon');

export class Icon extends React.Component {
    render() {

        return <i className={cnIcon({type: this.props.type}, [this.props.mixClass])}/>;
    }
}