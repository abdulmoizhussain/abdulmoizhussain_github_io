import React from 'react';
import { Link } from "react-router-dom";
import { AppRoute } from './../../common/constants';
import YouTubeUrlConverter from '../../components/you_tube_url_converter';
import MakeTextSearchable from '../../components/make_text_searchable';
import { forceUpdateServiceWorker } from '../../service-worker';
import './app.css';

export default () => (
  <div className="container-fluid font-lg text-white text-center bg-dark p-0">
    <button
      title="Force refresh to update this website with latest features."
      className="btn btn-sm btn-light"
      onClick={forceUpdateServiceWorker}
    >
      ForceUpdateSite
      </button>

    <div className="row p-0 m-0 mt-5">
      <div className="col p-0 m-0">
        <ul className='list-unstyled'>
          <li className="row">
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
    </div>
  </div>
);
