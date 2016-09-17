import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <h1><span>SciRuby</span>へようこそ</h1>
        <h2>- 科学技術計算 + Ruby ユーザーのためのハブサイト -</h2>
      </div>
    );
  }
}

export default Header;
