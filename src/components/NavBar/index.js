import React from 'react';

const NavBar = (props) => {
  return (
    <div className="navbar navbar-inverse navbar-fixed-top" role="navigation">
      <div className="navbar-header">
        <button
          type="button"
          className="navbar-toggle"
          data-toggle="collapse"
          data-target=".navbar-collapse">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a
          className="navbar-brand"
          href="/">
          <span className="glyphicon glyphicon-cutlery"></span>
          <span>Lunchpin</span></a>
      </div>
      <div className="collapse navbar-collapse">
        <ul className="nav navbar-nav">
          <li className="active"><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
