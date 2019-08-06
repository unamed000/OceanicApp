﻿import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './NavMenu.css';

export class NavMenu extends Component {
  displayName = NavMenu.name

  render() {
    return (
      <Navbar inverse fixedTop fluid collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to={'/'}>Oceanic</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to={'/'} exact>
              <NavItem>
                <Glyphicon glyph='home' /> Home
              </NavItem>
            </LinkContainer>
            <LinkContainer to={'/locations'}>
              <NavItem>
                <Glyphicon glyph='education' /> Locations
              </NavItem>
            </LinkContainer>
            <LinkContainer to={'/routes'}>
              <NavItem>
                <Glyphicon glyph='th-list' /> Routes
              </NavItem>
            </LinkContainer>
            <LinkContainer to={'/settings'}>
              <NavItem>
                <Glyphicon glyph='th-list' /> Settings
              </NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
