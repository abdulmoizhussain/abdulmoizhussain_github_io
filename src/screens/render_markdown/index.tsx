import React from 'react';
import MarkdownView from 'react-showdown';
import './style.css';

export default class RenderMarkdown extends React.Component {
  state = {
    markdown: "",
    whileDrag: false,
  };

  componentDidMount() {
    // const dropContainer: Element | null = document.getElementById('dropContainer');
    // dropContainer?.addEventListener("dragover", this.onDragEvent);
    // dropContainer?.addEventListener("dragenter", this.onDragEvent);
    // dropContainer.ondragover = dropContainer.ondragenter = 
    // dropContainer.ondrop = 
  }

  onDropEvent = (evt: React.DragEvent<HTMLDivElement>) => {
    // onDropEvent = (evt: { preventDefault: () => void; dataTransfer: { files: Blob[]; }; }) => {
    evt.preventDefault();
    const reader = new FileReader();

    reader.addEventListener("load", (file: ProgressEvent<FileReader>) => {
      // document.querySelector('#htmlDiv').innerHTML = new Showdown.Converter().makeHtml(file.target.result);
      // document.body.innerHTML = new Showdown.Converter().makeHtml(file?.target?.result);
      const markdown = file?.target?.result;
      this.setState({ markdown });
    });

    // reader.onload = (file: ProgressEvent<FileReader>) => {
    //   // document.querySelector('#htmlDiv').innerHTML = new Showdown.Converter().makeHtml(file.target.result);
    //   document.body.innerHTML = new Showdown.Converter().makeHtml(file.target.result);
    // }
    reader.readAsText(evt.dataTransfer.files[0]);
  };

  onDragEvent = (evt: React.DragEvent<HTMLDivElement>) => {
    evt.preventDefault();
    this.setState({ whileDrag: true });
  };

  onDragLeave = (evt: React.DragEvent<HTMLDivElement>) => {
    evt.preventDefault();
    this.setState({ whileDrag: false });
  };

  render() {
    return (
      <div>
        <div id="dropContainer"
          onDragOver={this.onDragEvent}
          onDragEnter={this.onDragEvent}
          onDragLeave={this.onDragLeave}
          onDrop={this.onDropEvent}
          className={this.state.whileDrag ? "on_drag" : ""}
        >
          <input type="file" />
          <h4>Drop markdown file here</h4>
        </div>
        {/* <div id="htmlDiv"></div> */}
        <MarkdownView markdown={this.state.markdown} />
      </div>
    );
  }
}