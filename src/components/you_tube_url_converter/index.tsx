import React from 'react';

export default class extends React.Component {
  inputCopyToClip = React.createRef<HTMLInputElement>();

  state = {
    displayCopyButton: false,
    message: '',
    youtubeEmbeddedUrl: '',
    youtubeWebUrl: '',
    copyToClipInProgress: false,
  };

  onKeyUpEmbeddedToWebUrl = () => {
    const { youtubeEmbeddedUrl } = this.state;

    // owner of regular expression -> https://stackoverflow.com/a/9836367/8075004
    const result = new RegExp(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]{0,11}).*/g).exec(youtubeEmbeddedUrl);

    if (result && result.length > 2) {
      const videoId = result[2];
      const newUrl = `https://www.youtube.com/watch?v=${videoId}`;
      this.setState({ message: newUrl, youtubeWebUrl: newUrl, displayCopyButton: true });
      return;
    }

    this.setState({ message: 'Invalid youtube url', displayCopyButton: false });

    // OR
    // try {
    //   const url = new URL(inputElement.value);
    //   let videoId;

    //   if (url.search) {
    //     const urlSearchParams = new URLSearchParams(url.search);
    //     videoId = urlSearchParams.get('v');
    //   } else {
    //     videoId = url.pathname.replace('/', '');
    //   }

    //   resultElement.innerHTML = `https://www.youtube.com/watch?v=${videoId}`;
    // } catch {
    //   resultElement.innerHTML = 'Invalid url';
    // }
  }

  copyToClip = () => {
    // owner of solution: https://www.w3schools.com/howto/howto_js_copy_clipboard.asp
    const input = this.inputCopyToClip.current;
    if (input) {
      input.value = this.state.youtubeWebUrl;

      this.setState({ copyToClipInProgress: true }, () => {
        input.select();
        input.setSelectionRange(0, 99999); /*For mobile devices*/
        document.execCommand('copy');
        this.setState({ copyToClipInProgress: false });
      });
    }
  }

  render() {
    const { displayCopyButton, message, youtubeEmbeddedUrl } = this.state;

    return <div className="col">
      <div className="row">
        <div className="col">
          <div className="row">
            <label className="col" htmlFor="youtube_embedded_url">Convert embedded/shared youtube-url to web-url:</label>
          </div>

          <div className="row">
            <input
              type='text'
              placeholder="https://youtu.be/eg_link"
              id='youtube_embedded_url'
              value={youtubeEmbeddedUrl}
              className="col"
              onChange={e => this.setState({ youtubeEmbeddedUrl: e.target.value }, this.onKeyUpEmbeddedToWebUrl)}
            />
          </div>

          <div className="row"><span className="col">{message}</span></div>

          <br />

          <div className="row">
            <div className="col-1" />
            <div className="col-10">
              <button onClick={this.copyToClip} className={`btn btn-primary btn-block ${displayCopyButton ? '' : 'invisible'}`}>Copy</button>
            </div>
            <div className="col-1" />
          </div>

          <input hidden={!this.state.copyToClipInProgress} ref={this.inputCopyToClip} />
        </div>
      </div>
    </div>;
  }
}
