import * as React from 'react';
import {cn} from '@bem-react/classname';
import './Music.scss';

export const cnMusic = cn('Music');
export const cnTrack = cn('Track');
export const cnMusicNav = cn('MusicNav');

export class Music extends React.Component {

    getTrackSeconds(data) {
        let timeArr = data.split(':');
        return (timeArr[0] * 60) + parseInt(timeArr[1]);
    }

    render() {
        return <div className={cnMusic()}>
            <img className={cnMusic('Albumcover')} src={this.props.data.albumcover} alt="albumcover"/>
            <div className={cnMusic('Track', ['Track'])}>
                <div className={cnTrack('Description')}>{this.props.data.artist} - {this.props.data.track.name}</div>
                <div className={cnTrack('Body')}>
                    <input className={cnTrack('Input')} type="range" min="0" max={this.getTrackSeconds(this.props.data.track.length)} step="1" defaultValue="0"/>
                    <div className={cnTrack('Length')}>{this.props.data.track.length}</div>
                </div>
            </div>
            <div className={cnMusicNav()}>
                <button className={cnMusicNav('Prev')}/>
                <button className={cnMusicNav('Next')}/>
                <div className={cnMusicNav('Volume')}>
                    <input className={cnMusicNav('VolumeInput')} type="range" min="0" max="100" step="1" defaultValue="80"/>
                    <div className={cnMusicNav('Value')}>{this.props.data.volume}%</div>
                </div>
            </div>
        </div>
    }
}