import React from 'react';
import GitHubSvg from '../github_svg';
import { Link } from 'react-router-dom';
import { AppRoute } from './../../common/constants';

export default () => (
  <nav className='navbar'>
    <a href="https://github.com/abdulmoizhussain" title="Abdul Moiz's Github Repositories">
      <GitHubSvg />
    </a>

    <Link to={AppRoute.HomePage} title="Home Page" className='ml-auto'>
      <b>Home</b>
    </Link>
  </nav >
);
