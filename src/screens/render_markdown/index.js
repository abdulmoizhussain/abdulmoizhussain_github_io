import React from 'react';
import Showdown from 'showdown';
import './style.css';

export default class RenderMarkdown extends React.Component {
  componentDidMount() {
    const dropContainer = document.querySelector('#dropContainer');
    dropContainer.ondragover = dropContainer.ondragenter = (evt) => {
      evt.preventDefault();
    };

    dropContainer.ondrop = (evt) => {
      evt.preventDefault();
      const reader = new FileReader();
      reader.onload = (file) => {
        // document.querySelector('#htmlDiv').innerHTML = new Showdown.Converter().makeHtml(file.target.result);
        document.body.innerHTML = new Showdown.Converter().makeHtml(file.target.result);
        console.log('document: ', document);
      }
      reader.readAsText(evt.dataTransfer.files[0]);
    };
  }
  render() {
    return (
      <div>
        <div className="" id="dropContainer">
          <input type="file" className="" id="source" />
          <h4>Drop MD file here</h4>
        </div>
        <div id="htmlDiv"></div>
      </div>
    );
  }
}