import * as React from 'react';
import { Nav } from '../Nav/Nav';
import {Logo} from "../Logo/Logo";
import { cn } from '@bem-react/classname';

import './Header.scss';

export const cnHeader = cn('Header');

let linkNames = ['Сводка', 'Устройства', 'Сценарии'];
let navType = {type: 'bold'};

export class Header extends React.Component {
    render() {
        return <div className={cnHeader()}>
            <Logo />
            <Nav value={linkNames} type={navType} />
        </div>;
    }
}
