import React from 'react';

export default class RenderMarkdown extends React.Component {
  state = {
    textToClean: ""
  };

  makeItSearchable = () => {
    const textToCopy = this.state.textToClean.replace(/[^a-zA-Z0-9]+/g, " ").trim();

    const textAreaElement = document.createElement("textarea");

    textAreaElement.value = textToCopy;

    document.body.appendChild(textAreaElement);

    textAreaElement.select();
    document.execCommand("copy");

    document.body.removeChild(textAreaElement);
  };

  render() {
    return (<div className="col">

      <div className="row">
        <div className="col">
          <input
            type="text"
            value={this.state.textToClean}
            size={30}
            onChange={ev => { this.setState({ textToClean: ev.target.value }); }}
          />
        </div>
      </div>

      <div className="row">
        <div className="col"><button onClick={this.makeItSearchable}>MakeItSearchable</button></div>
      </div>

    </div>
    );
  }
}