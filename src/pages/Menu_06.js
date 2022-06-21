import React from 'react';
import './menu.scss';
import './table.css';

const menu_06 = () => {
  return (
    <header className='header'>
      <a href='' className='logo'>
        陳亮華
      </a>
      <input className='menu-btn' type='checkbox' id='menu-btn' />
      <label className='menu-icon' for='menu-btn'>
        <span className='navicon'></span>
      </label>
      <ul class='menu'>
      <li>
          <a href='./fine'>chat</a>
        </li>
        <li>
          <a href='./Dashboard'>Dashboard</a>
        </li>
        <li>
          <a href='./register'>Register</a>
        </li>
        <li>
          <a href='./work'>Login</a>
        </li>
        <li>
          <a href='./final'>Project</a>
        </li>
      </ul>

      <div className='row'>
        <div className='example-1 card'>
          <div className='wrapper'>
            <div className='date'>
              <span className='day'>06</span>
              <span className='month'>June</span>
              <span className='year'>2022</span>
            </div>
            <div className='data'>
              <div className='content'>
                <span className='author'>我家狗狗</span>
                <h1 className='title'>
                  <a href='#'>他是多多，今年兩歲</a>
                </h1>
                <p className='text'>
                  
                </p>
                <label for='show-menu' className='menu-button'>
                  <span></span>
                </label>
              </div>
              <input type='checkbox' id='show-menu' />
              <ul className='menu-content'>
                <li>
                  <a href='#' className='fa fa-bookmark-o'></a>
                </li>
                <li>
                  <a href='#' className='fa fa-heart-o'>
                    <span>47</span>
                  </a>
                </li>
                <li>
                  <a href='#' className='fa fa-comment-o'>
                    <span>8</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='example-2 card'>
          <div className='wrapper'>
            <div className='header'>
              <div className='date'>
                <span className='day'>這是我</span>
                <span className='month'></span>
                <span className='year'></span>
              </div>
              <ul className='menu-content'>
                <li>
                  <a href='#' className='fa fa-bookmark-o'></a>
                </li>
                <li>
                  <a href='#' className='fa fa-heart-o'>
                    <span>18</span>
                  </a>
                </li>
                <li>
                  <a href='#' className='fa fa-comment-o'>
                    <span>3</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className='data'>
              <div className='content'>
                <span className='author'> 我的名字叫陳亮華，住在台北，就讀淡江大學</span>
                <h1 className='title'>
                  <a href='#'></a>
                </h1>
                <p className='text'>
                  我的名字叫陳亮華，住在台北，就讀淡江大學
                </p>
                <a href='#' className='button'>
                  Read more
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <p></p>
      </div>
    </header>
  );
};

export default menu_06;
