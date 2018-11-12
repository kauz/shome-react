import * as React from 'react';
import { cn } from '@bem-react/classname';

import './Nav.scss';

export const cnNav = cn('Nav');

export class Nav extends React.Component {
    renderLinks = (linkNames) => linkNames.map((linkName, index) => {
        return <li key={index} className={cnNav('Item')}>
            <a href="#" className={cnNav('Link', { selected: !index })}>{linkName}</a>
        </li>;
    });

    render() {
        const { value } = this.props;
        return <div className={cnNav()}>
            <ul className={cnNav('List')}>
            {this.renderLinks(value)}
            </ul>
        </div>;
    }
}
