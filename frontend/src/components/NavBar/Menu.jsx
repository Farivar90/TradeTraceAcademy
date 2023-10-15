import React from 'react';
import { useState } from 'react';
import './Menu.css'

function Menu() {
    const [isOpen, setIsOpen] = useState(false);

    // Toggle the state of the menu
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  return (
    <header className="menu_header relative">
        <div className={`menu ${isOpen ? 'menu-opened' : ''}`}>
        <div className="menu_header">
          <button className="menu_opener" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className="menu_menu">
        <nav data-reactid="16">
            <ul className="menu_list menu_list-main" data-reactid="17">
              <li className="menu_item menu_item-big" data-reactid="18">
                <a className="menu_link menu_link-anim" href="/Lessons" data-reactid="19">
                  <span className="link_layer" data-text="Lessons" data-reactid="20"></span>
                  Lessons
                </a>
              </li>
              <li className="menu_item menu_item-big" data-reactid="22">
                <a className="menu_link menu_link-anim" href="/News" data-reactid="23">
                  <span className="link_layer" data-text="News" data-reactid="24"></span>
                  News
                </a>
              </li>
              <li className="menu_item menu_item-big" data-reactid="26">
                <a className="menu_link menu_link-anim" href="/Forum" data-reactid="27">
                  <span className="link_layer" data-text="Forum" data-reactid="28"></span>
                  Forum
                </a>
              </li>
              <li className="menu_item menu_item-big" data-reactid="30">
                <a className="menu_link menu_link-anim" href="/CurrencyMap" data-reactid="31">
                  <span className="link_layer" data-text="Currency's Map" data-reactid="32"></span>
                  Currency's Map
                </a>
              </li>
              <li className="menu_item menu_item-big" data-reactid="34">
                <a className="menu_link menu_link-anim" href="/ContactUs" data-reactid="35">
                  <span className="link_layer" data-text="Contact Us" data-reactid="36"></span>
                  Contact Us
                </a>
              </li>
            </ul>
            <ul className="menu_list menu_list-alter" data-reactid="38">
              <li className="menu_item" data-reactid="39">
                <a className="menu_link" href="https://www.tradingview.com/" data-reactid="40">
                  <span className="link_layer" data-text="Trading View" data-reactid="41"></span>
                  Trading View
                </a>
              </li>
              <li className="menu_item" data-reactid="43">
                <a className="menu_link" href="/events" data-reactid="44">
                  <span className="link_layer" data-text="Events" data-reactid="45"></span>
                  Events
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Menu;
