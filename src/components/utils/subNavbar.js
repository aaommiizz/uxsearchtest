import React from 'react'
import { Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap'
import { Container, Row, Col } from 'reactstrap'

class SubNavbar extends React.Component {
  render() {
    return (
      <section id='sub-navbar'>
        <Container fluid className='nav-bgColoruxer d-none d-md-block'>
          <Row>
            <Col md={1}></Col>
            <Col md={10} className='text-center'>
              <Nav navbar className='menu-line'>
                <NavItem className='menu-block'>
                  <NavLink href='/uxer/project/experiments' className='link-text'>Video Results</NavLink>
                </NavItem>
                <NavItem className='menu-block' active>
                  <NavLink href='/uxer/project/experiment/question' className='link-text'>Create Questionnaire</NavLink>
                </NavItem>
                <NavItem className='menu-block'>
                  <NavLink href='#' className='link-text'>Create Usability Test Note</NavLink>
                </NavItem>
              </Nav>
            </Col>
          </Row>
        </Container>
        <Container className='nav-bgColoruxer d-md-none'>
          <Nav navbar className='menu-line text-center'>
            <NavItem className='menu-block'>
              <NavLink href='#' className='link-text'>Video Results</NavLink>
            </NavItem>
            <NavItem className='menu-block' active>
              <NavLink href='#' className='link-text'>Create Questionnaire</NavLink>
            </NavItem>
            <NavItem className='menu-block'>
              <NavLink href='#' className='link-text'>Create Usability Test Note</NavLink>
            </NavItem>
          </Nav>
        </Container>
      </section>
    )
  }
}

export default SubNavbar