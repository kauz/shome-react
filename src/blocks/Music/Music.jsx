import * as React from 'react';
import {cn} from '@bem-react/classname';
import './Music.scss';

export const cnMusic = cn('Music');

export class Music extends React.Component {
    render() {

        return <div className={cnMusic()}>
            <img className='Music-Albumcover' src={this.props.data.albumcover} alt="albumcover"/>
            <div className='Music-Track Track'>
                <div className='Track-Description'>{this.props.data.artist} - {this.props.data.track.name}</div>
                <div className='Track-Body'>
                    <input className="Track-Input" type="range" min="0" max="24000" step="1" defaultValue="0"/>
                    <div className="Track-Length">{this.props.data.track.length}</div>
                </div>
            </div>
            <div className='Music-Nav'>
                <button className="MusicNav-Prev"/>
                <button className="MusicNav-Next"/>
                <div className="MusicNav-Volume">
                    <input className="MusicNav-VolumeInput" type="range" min="0" max="100" step="1" defaultValue="80"/>
                    <div className="MusicNav-Value">{this.props.data.volume}%</div>
                </div>
            </div>
        </div>
    }
}