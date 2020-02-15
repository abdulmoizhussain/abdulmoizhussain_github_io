import React from 'react';

export default class extends React.Component {
  state = {
    displayCopyButton: false,
    message: '',
    youtubeEmbeddedUrl: '',
    youtubeWebUrl: '',
  };

  // constructor(props) {
  //   super(props);
  //   // this.inputCopyToClip = React.createRef();
  // }

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
    // https://stackoverflow.com/a/52033479/8075004
    navigator.clipboard.writeText(this.state.youtubeWebUrl);

    // owner of solution: https://www.w3schools.com/howto/howto_js_copy_clipboard.asp
    // const input = this.inputCopyToClip.current;
    // input.value = this.state.youtubeWebUrl;
    // input.select();
    // input.setSelectionRange(0, 99999); /*For mobile devices*/
    // window.document.execCommand('copy');
  }

  render() {
    const { displayCopyButton, message, youtubeEmbeddedUrl } = this.state;

    return <div>
      <label htmlFor="youtube_embedded_url">Convert shared/embedded youtube-url to web-url:</label>
      <br />
      <input
        type='text'
        placeholder='https://youtu.be/eg_link'
        id='youtube_embedded_url'
        onKeyUp={this.onKeyUpEmbeddedToWebUrl}
        value={youtubeEmbeddedUrl}
        onChange={e => this.setState({ youtubeEmbeddedUrl: e.target.value })}
        size={50}
      />
      <br />
      <span>{message}</span>
      <br />

      <button onClick={this.copyToClip} className={displayCopyButton ? '' : 'invisible'}>Copy</button>

      {/* <input hidden className='invisible' ref={this.inputCopyToClip} /> */}
    </div>;
  }
}
