import * as React from 'react';
import { cn } from '@bem-react/classname';
import './Logo.scss';

let logo = require('./logo.svg');

export const cnLogo = cn('Logo');

export class Logo extends React.Component {
    render() {
        return <img className={cnLogo()} src={logo} alt={'Logo'} />;
    }
}
