import React from 'react';
import GitHubSvg from '../github_svg';

export default () => (
  <nav className='navbar'>
    <a href="https://github.com/abdulmoizhussain" title="Abdul Moiz's Github Repositories">
      <GitHubSvg />
    </a>

    <a className='ml-auto' href="./index.html" title="Home Page">
      <b>Home</b>
    </a>
  </nav>
);
