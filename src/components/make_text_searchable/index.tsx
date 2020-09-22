import React from 'react';

export default class RenderMarkdown extends React.Component {
  textToCleanRef = React.createRef<HTMLInputElement>();
  state = {
    textToClean: ""
  };

  componentDidMount() {
    this.textToCleanRef.current?.focus();
  }

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
            ref={this.textToCleanRef}
            type="text"
            placeholder="Paste here the text to clean."
            value={this.state.textToClean}
            size={35}
            onChange={ev => { this.setState({ textToClean: ev.target.value }); }}
          />
        </div>
      </div>

      <div className="row">
        <div className="col"><button onClick={this.makeItSearchable}>&#x2191; Make It Searchable &#x2191;</button></div>
      </div>

    </div>
    );
  }
}