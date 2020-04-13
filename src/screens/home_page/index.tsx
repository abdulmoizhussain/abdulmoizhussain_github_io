import React from 'react';
import { Link } from "react-router-dom";
import { AppRoute } from './../../common/constants';
import YoutubeUrlConverter from './../../components/youtube_url_converter';
import './app.css';

export default () => (
  <div className="text-center app_header dark_background">
    <ul className='list-unstyled'>
      <li className="row text-center"><Link className='col app_link' to={AppRoute.RgbToHex}>rgb-hex</Link></li>
      <li className="row"><Link className='col app_link' to={AppRoute.RenderMarkdown}>render-markdown</Link></li>
      <li className="row"><YoutubeUrlConverter /></li>
    </ul>
  </div>
);
