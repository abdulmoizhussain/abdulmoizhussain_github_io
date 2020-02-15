import React from 'react';

export default class Footer extends React.Component {
  render() {
    return <footer className="social-footer" style="position: sticky; bottom: 0; width: 100%">
      <div className="social-footer-left">&copy; 2018, All Rights Reserved.</div>
      <div className="social-footer-icons">

        <ul className="menu simple">
          <a href="https://www.facebook.com/"><i className="fa fa-facebook" aria-hidden="true" /></a>

          <a href="https://www.instagram.com/?hl=en"><i className="fa fa-instagram" aria-hidden="true" /></a>

          <a href="https://www.pinterest.com/"><i className="fa fa-pinterest-p" aria-hidden="true" /></a>

          <a href="https://twitter.com/?lang=en"><i className="fa fa-twitter" aria-hidden="true" /></a>
        </ul>
      </div>
    </footer>;
  }
};
