import * as React from 'react';
import { cn } from '@bem-react/classname';
import './Data.scss';

export const cnData = cn('Data');

export class Data extends React.Component {

    renderData() {
        let data = this.props.data;

        if (data.type === 'graph') {
            return 'graphic';
        } else if (data.temperature && data.humidity) {
            return <div className={cnData('Items')}>
                <p className={cnData('Item')}>Температура: <span className={cnData('Digit')}>{data.temperature + '℃'}</span></p>
                <p className={cnData('Item')}>Влажность: <span className={cnData('Digit')}>{data.humidity + '%'}</span></p>
            </div>
        } else if (data.track) {
            return 'track'
        } else if (data.image) {
            return 'image';
        } else if (data.buttons) {
            return 'buttons'
        }
    }

    render() {

        console.log(this.props.data);
        return <div className={cnData(null, [this.props.mixClass])}>
            {this.renderData()}
        </div>;
    }
}