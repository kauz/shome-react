import * as React from 'react';
import { cn } from '@bem-react/classname';

export const cnImage = cn('Image');

export class Image extends React.Component {
    render() {
        const { sizes } = this.props;
        return <img srcSet={`${sizes.small} 408w, ${sizes.medium} 1664w, ${sizes.large} 2496w`}
                    sizes="(max-width: 768px) 408px, (max-width: 2560px) 1664px, 2496px"
                    className={cnImage(null, [this.props.mixClass, "Event-Img"])}
                    src={sizes.small} alt=''/>;
    }
}
