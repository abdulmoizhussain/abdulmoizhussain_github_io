import React from 'react';
import { Link } from "react-router-dom";
import { AppRoute } from './../../common/constants';
import YouTubeUrlConverter from '../../components/you_tube_url_converter';
import MakeTextSearchable from '../../components/make_text_searchable';
import './app.css';

export default () => (
  <div className="text-center app_header dark_background">
    <ul className='list-unstyled'>
      <li className="row text-center"><Link className='col app_link' to={AppRoute.RgbToHex}>RGB-Hex</Link></li>
      <li className="row"><Link className='col app_link' to={AppRoute.RenderMarkdown}>Render Markdown</Link></li>
      <li className="row"><Link className='col app_link' to={AppRoute.Counter}>Counter</Link></li>
      <li className="row mt-2"><MakeTextSearchable /></li>
      <li className="row mt-2"><YouTubeUrlConverter /></li>
    </ul>
  </div>
);
