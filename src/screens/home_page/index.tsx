import React from 'react';
import { Link } from "react-router-dom";
import { AppRoute } from './../../common/constants';
import YouTubeUrlConverter from '../../components/you_tube_url_converter';
import MakeTextSearchable from '../../components/make_text_searchable';
import './app.css';

export default () => (
  <div className="text-center home_page dark_background">
    <ul className='list-unstyled'>
      <li className="row mt-3">
        <div className="col">
          <Link className='col app_link p-0' to={AppRoute.RgbToHex}>RGB-Hex</Link>
        </div>
      </li>
      <li className="row">
        <div className="col">
          <Link className='col app_link p-0' to={AppRoute.RenderMarkdown}>Render Markdown</Link>
        </div>
      </li>
      <li className="row">
        <div className="col">
          <Link className='col app_link p-0' to={AppRoute.Counter}>Counter</Link>
        </div>
      </li>
      <li className="row mt-3"><MakeTextSearchable /></li>
      <li className="row mt-3"><YouTubeUrlConverter /></li>
    </ul>
  </div>
);
