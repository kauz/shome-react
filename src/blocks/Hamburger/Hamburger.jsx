import * as React from 'react';
import { cn } from '@bem-react/classname';
import './Hamburger.scss';


export const cnHamburger = cn('Hamburger');

export class Hamburger extends React.Component {
    render() {
        return <div className={cnHamburger()} />;
    }
}
