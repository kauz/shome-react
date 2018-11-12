import * as React from 'react';
import { cn } from '@bem-react/classname';
import { Nav } from '../Nav/Nav';
import './Footer.scss';

let linkNames = ['Помощь', 'Обратная связь', 'Разработчикам', 'Условия использования', 'Авторские права'];

export const cnFooter = cn('Footer');
let navType = {type: 'footer'};

export class Footer extends React.Component {
    render() {
        return <div className={cnFooter()}>
            <Nav value={linkNames} type={navType} />
            <div className={cnFooter('Copyright')}>© 2001–2018 ООО «Яндекс»</div>
        </div>;
    }
}
