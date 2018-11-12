import * as React from 'react';
import { cn } from '@bem-react/classname';
import {Container} from "./Container/Container";
import {Events} from "../Events/Events";
import './Main.scss';

export const cnMain = cn('Main');

export class Main extends React.Component {
    render() {
        let title = {
            class: cnMain('Title'),
            text: 'Лента событий'
        };

        let content = Events;

        return <div className={cnMain()}>
            <Container title={title} children={content}>
                <Events/>
            </Container>
        </div>;
    }
}
