import * as React from 'react';
import { Nav } from '../Nav/Nav';
import {Logo} from "../Logo/Logo";
import { cn } from '@bem-react/classname';

import './Header.scss';

export const cnHeader = cn('Header');

let linkNames = ['События', 'Сводка', 'Устройства', 'Сценарии', 'Видеонаблюдение'];

export class Header extends React.Component {
    render() {
        return <div className={cnHeader()}>
            <Logo />
            <Nav value={linkNames} />
        </div>;
    }
}
