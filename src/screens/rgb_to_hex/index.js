import React from 'react';
import './style.css';
import { hexToRGB, rgbToHex } from './events';

export default class RgbToHex extends React.Component {
  render() {
    return (
      <div>
        <div className="parent-box">
          <div id="rgbBox">&nbsp;</div>
          <div className="box">
            <label htmlFor="rgb">
              RGB(&nbsp;
              <input
                type="text"
                id="rgb"
                placeholder="255 255 255 | 255, 255, 255"
                onChange={rgbToHex.bind(this)}
                size={25} />
              &nbsp;)
            </label>
            &nbsp;&nbsp;&nbsp;
        <span id="hexSTR"></span>
          </div>
        </div>

        <div className="parent-box">
          <div id="hexBox">&nbsp;</div>
          <div className="box">
            <label htmlFor="hex">#&nbsp;<input type="text" id="hex" placeholder="0099ff" onChange={hexToRGB.bind(this)} /></label>
            &nbsp;&nbsp;&nbsp;
          <span id="rgbSTR"></span>
          </div>
        </div>
      </div>
    );
  }
}