
import React from 'react';
import './header.css';

export default function Header() {
  return (
    <header className="header">
      <h1 className="logo">Courage</h1>
      <nav className="header-nav">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>

      <div className="ions">
        <div className="iconDiv whatsapp">
          <i class="fa-brands fa-square-whatsapp"></i>
        </div>

        <div className="iconDiv twitter">
          <i class="fa-brands fa-square-x-twitter"></i>
        </div>

        <div className="iconDiv linkedin">
          <i class="fa-brands fa-linkedin"></i>
        </div>

        <div className="iconDiv telegram">
          <i class="fa-brands fa-telegram"></i>
        </div>

        <div className="iconDiv github">
          <i class="fa-brands fa-square-github"></i>
        </div>
      </div>
    </header>
  );
}