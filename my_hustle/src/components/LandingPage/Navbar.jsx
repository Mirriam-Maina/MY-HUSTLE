import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react';
import './Landing.css';

export default class Navbar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
      <div className="logo">My Hustle<span className="stop">.</span></div>
      <div className="navbar-div">
      <Menu>
          <Menu.Item
          name='About'
          className="home-item"
          active={activeItem === 'About'}
          onClick={this.handleItemClick}
        >
          Home
          </Menu.Item>
          <Menu.Item
          name='About'
          active={activeItem === 'About'}
          onClick={this.handleItemClick}
        >
          Services
          </Menu.Item>
          <Menu.Item
          name='About'
          active={activeItem === 'About'}
          onClick={this.handleItemClick}
        >
          About
          </Menu.Item>
          <Menu.Item
          name='  Contact Us'
          active={activeItem === 'Contact Us'}
          onClick={this.handleItemClick}
        >
          Contact Us
        </Menu.Item>
      </Menu>
      </div>
      </div>

    )
  }
}