import React from 'react';
import './index.css';

export default function Header() {
  return (
    <div className="header clear">
      <div className="header-lt">
        <span>深圳</span>
        &nbsp;
        <i className="icon-angle-down"/>
      </div>
      <div className="header-rt">
        <i className="icon-user"/>
      </div>
      <div className="header-md">
        <i className="icon-search"/>
        <input type="text" placeholder="请输入关键字"/>
      </div>
    </div> 
  );
}