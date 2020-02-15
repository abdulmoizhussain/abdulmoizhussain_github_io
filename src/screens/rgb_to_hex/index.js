import React from 'react';

export default class RgbToHex extends React.Component {
  state = {};

  render() {
    return (<div><div class="parent-box">
      <div id="rgbBox">&nbsp;</div>
      <div class="box">
        <label for="rgb">
          RGB(&nbsp;
      <input type="text" id="rgb" placeholder="255 255 255 / 255, 255, 255" onkeyup="rgbToHex()" size="25" />
          &nbsp;)
    </label>
        &nbsp;&nbsp;&nbsp;
    <span id="hexSTR"></span>
      </div>
    </div>

      <div class="parent-box">
        <div id="hexBox">&nbsp;</div>
        <div class="box">
          <label for="hex">
            #&nbsp;
      <input type="text" id="hex" placeholder="0099ff" onkeyup="hexToRGB()" />
          </label>
          &nbsp;&nbsp;&nbsp;
    <span id="rgbSTR"></span>
        </div>
      </div>
    </div>);
  }
}