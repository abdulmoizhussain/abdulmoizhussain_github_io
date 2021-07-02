import React from 'react';

export default class extends React.Component {
  inputCopyToClip = React.createRef<HTMLInputElement>();

  state = {
    urlToConvert: '',
    copyToClipInProgress: false,
    convertedLinks: [],
  };

  onKeyUpUrlConverter = () => {
    const { urlToConvert } = this.state;

    // for https://github.com/USERNAME/REPOSITORY.git
    let result = /([a-zA-Z]+.com)\/([a-zA-Z_.-]+)\/([a-zA-Z_.-]+).git/.exec(urlToConvert);
    if (result) {
      const [, domain, username, repoName] = result;
      const links = [];

      links.push(`git@${domain}:${username}/${repoName}.git`);
      links.push(`https://${domain}/${username}/${repoName}.git`);
      links.push(`gh repo clone ${username}/${repoName}`);

      this.setState({ convertedLinks: links });
      return;
    }

    // for git@github.com:USERNAME/REPOSITORY.git
    result = /git@([a-zA-Z]+.[a-zA-Z]+):([a-zA-Z_.-]+)\/([a-zA-Z_.-]+).git/.exec(urlToConvert);
    if (result) {
      const [, domain, username, repoName] = result;
      const links = [];

      links.push(`git@${domain}:${username}/${repoName}.git`);
      links.push(`https://${domain}/${username}/${repoName}.git`);
      links.push(`gh repo clone ${username}/${repoName}`);

      this.setState({ convertedLinks: links });
      return;
    }

    // for USERNAME/REPOSITORY
    result = /^([a-zA-Z_-]+)\/([a-zA-Z_-]+)$/.exec(urlToConvert);
    if (result) {
      const [, username, repoName] = result;
      const links = [];

      links.push(`git@github.com:${username}/${repoName}.git`);
      links.push(`https://github.com/${username}/${repoName}.git`);
      links.push(`gh repo clone ${username}/${repoName}`);

      this.setState({ convertedLinks: links });
      return;
    }

    // for https://abdulmoizprosper@bitbucket.org/somecompanyname/somereponame.git
    result = /([a-zA-Z_.-]+)@([a-zA-Z]+.[a-zA-Z]+)\/([a-zA-Z_.-]+)\/([a-zA-Z_.-]+).git/.exec(urlToConvert);
    if (result) {
      const [, gitUsername, domain, username, repoName] = result;
      const links = [];

      links.push(`git@${domain}:${username}/${repoName}.git`);
      links.push(`https://${domain}/${username}/${repoName}.git`);
      links.push(`gh repo clone ${username}/${repoName}`);
      links.push(`https://${gitUsername}@${domain}/${username}/${repoName}.git`);

      this.setState({ convertedLinks: links });
      return;
    }

    this.setState({ convertedLinks: [] });
  };

  copyToClipboard = (textToCopy: string) => {
    // owner of solution: https://www.w3schools.com/howto/howto_js_copy_clipboard.asp
    const input = this.inputCopyToClip.current;
    if (input) {
      input.value = textToCopy;

      this.setState({ copyToClipInProgress: true }, () => {
        input.select();
        input.setSelectionRange(0, 99999); /*For mobile devices*/
        document.execCommand('copy');
        this.setState({ copyToClipInProgress: false });
      });
    }
  };

  render() {
    const { urlToConvert } = this.state;

    return <div className="col">
      <div className="row">
        <div className="col">
          <div className="row">
            <label className="col mb-0" htmlFor="github_url_to_convert">Convert Github URLs:</label>
          </div>

          <div className="row">
            <div className="col">
              <input
                type="text"
                placeholder="github link here"
                id='github_url_to_convert'
                value={urlToConvert}
                size={25}
                className="text-center"
                onChange={e => this.setState({ urlToConvert: e.target.value }, this.onKeyUpUrlConverter)}
              />
            </div>
          </div>

          {this.state.convertedLinks.map((link, index) => {
            return <React.Fragment key={index}>
              <div className="row"><span className="col">{link}</span></div>
              <div className="row">
                <div className="col-1" />
                <div className="col-10">
                  <button
                    onClick={this.copyToClipboard.bind(this, link)}
                    className={`btn btn-primary m-0`}>Copy</button>
                </div>
                <div className="col-1" />
              </div>
            </React.Fragment>;
          })}
        </div>
      </div>
      {/* for copy-to-clipboard purpose, DO NOT REMOVE THIS ELEMENT */}
      <input hidden={!this.state.copyToClipInProgress} ref={this.inputCopyToClip} />
    </div>;
  }
}
