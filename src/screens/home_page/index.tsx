import React from 'react';
import { Link } from "react-router-dom";
import { AppRoute } from './../../common/constants';
import YouTubeUrlConverter from '../../components/you_tube_url_converter';
import GithubUrlConverter from '../../components/github_url_converter/index';
import MakeTextSearchable from '../../components/make_text_searchable';
import { forceUpdateServiceWorker } from '../../service-worker';
import './app.css';

export default () => {
  let forceUpdateLastClickTime = new Date().getTime();

  function onForceUpdate() {
    if ((new Date().getTime() - forceUpdateLastClickTime) < 300) {
      if (window.confirm("Are you sure you want to force refresh?")) {
        forceUpdateServiceWorker();
      }
    }
    else {
      forceUpdateLastClickTime = new Date().getTime();
    }
  }

  return <div className="container-fluid font-lg text-white text-center bg-dark p-0">
    <button
      title="Double click for force-refresh to update this website with latest features."
      className="btn btn-sm btn-light mt-1"
      onClick={onForceUpdate}
    >ForceUpdateSite</button>

    <div className="row p-0 m-0 mt-5">
      <div className="col p-0 m-0">

        <ul className='list-unstyled'>
          <li className="row m-0">
            <div className="col p-0">
              <Link className='app_link p-0' to={AppRoute.RgbToHex}>RGB-Hex</Link>
            </div>
          </li>
          <li className="row m-0">
            <div className="col p-0">
              <Link className='app_link p-0' to={AppRoute.RenderMarkdown}>Render Markdown</Link>
            </div>
          </li>
          <li className="row m-0">
            <div className="col p-0">
              <Link className='app_link p-0' to={AppRoute.Counter}>Counter</Link>
            </div>
          </li>
          <li className="row m-0">
            <div className="col p-0">
              <Link className='app_link p-0' to={AppRoute.Percentage}>Percentage</Link>
            </div>
          </li>
          <li className="row m-0 mt-3"><MakeTextSearchable /></li>
          <li className="row m-0 mt-3"><GithubUrlConverter /></li>
          <li className="row m-0 mt-3"><YouTubeUrlConverter /></li>
        </ul>

      </div>
    </div>
  </div>
};
