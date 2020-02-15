import React from 'react';
import { Link } from "react-router-dom";
import { AppRoute } from './../../common/constants';
import Header from '../../components/header';
import YoutubeUrlConverter from './../../components/youtube_url_converter';
import './app.css';

export default () => (
  <div className="app">
    <Header />
    <div className="app_header">
      <ul className='list-unstyled'>
        <li><Link className='app_link' to={AppRoute.RgbToHex}>rgb-hex</Link></li>
        <li><a className="app_link" href="./render-markdown.html">render-markdown</a></li>
        <li><YoutubeUrlConverter /></li>
      </ul>
    </div>
  </div>
);
