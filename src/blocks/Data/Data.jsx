import * as React from 'react';
import {cn} from '@bem-react/classname';
import './Data.scss';
import {Button} from "../Button/Button";
import {Music} from "../Music/Music";
import {Image} from "./Image/Image";
import {Graph} from "./Graph/Graph";

let graph = require('./graph.svg');
let mocks = {
    small: require('./get_it_from_mocks_:3.jpg'),
    medium: require('./get_it_from_mocks_:3@2x.jpg'),
    large: require('./get_it_from_mocks_:3@3x.jpg')
};

export const cnData = cn('Data');

export class Data extends React.Component {

    renderData() {
        let data = this.props.data;

        if (data.type === 'graph') {
            return <Graph mixClass={cnData('Img')} src={graph}/>;
        } else if (data.temperature && data.humidity) {
            return this.renderTemperature(data);
        } else if (data.track) {
            return <Music data={data}/>;
        } else if (data.image) {
            return <Image sizes={mocks} mixClass={cnData('Img')}/>;
        } else if (data.buttons) {
            return this.renderButtons(data.buttons);
        }
    }

    renderButtons(buttons) {
        const display = buttons.map((text, index) => {
            return (
                text === 'Да' ? <Button key={index} text={text} mixClass={cnData('Button')} isPrimary={{primary: true}}/> : <Button key={index} text={text} mixClass={cnData('Button')} isPrimary={null}/>
            );
        });

        return (
            <div className={cnData('Buttons')}>
                {display}
            </div>
        )
    }

    renderTemperature(data) {
        return <div className={cnData('Items')}>
            <p className={cnData('Item')}>Температура: <span className={cnData('Digit')}>{data.temperature + '℃'}</span></p>
            <p className={cnData('Item')}>Влажность: <span className={cnData('Digit')}>{data.humidity + '%'}</span></p>
        </div>;
    }

    render() {
        return <div className={cnData(null, [this.props.mixClass])}>
            {this.renderData()}
        </div>;
    }
}