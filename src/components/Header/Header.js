import { useState } from 'react';
import classes from './Header.module.sass';
import {
  Collapse,
  Container,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink as Link,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={classes.Header}>
      <Container>
        <Navbar color="dark" dark expand="lg">
          <NavbarBrand tag={NavLink} to="/" exact>
            Films
          </NavbarBrand>
          <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link tag={NavLink} to="/" exact>
                  Home
                </Link>
              </NavItem>
              <NavItem>
                <Link tag={NavLink} to="/movies/">
                  Movies
                </Link>
              </NavItem>
              <NavItem>
                <Link tag={NavLink} to="/tvshows/">
                  TV Shows
                </Link>
              </NavItem>
              <NavItem>
                <Link tag={NavLink} to="/persons/">
                  Persons
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </Container>
    </header>
  );
};

export default Header;
