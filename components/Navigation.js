import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import Link from "next/link";
import { useContext } from "react";
import AppContext from "../AppContext";

export default function Navigation() {
  const value = useContext(AppContext);
  let { languageSelected } = value.state;
  let { navbarAboutLink, navbarContactLink } = value.state.languages;

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Link href="/">
          <a className="navbar-brand">Next Context API</a>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Link href="/about">
              <a className="nav-link">{navbarAboutLink}</a>
            </Link>
            <Link href="/contact">
              <a className="nav-link">{navbarContactLink}</a>
            </Link>
            <NavDropdown
              title={languageSelected.toUpperCase()}
              id="collasible-nav-dropdown"
            >
              <NavDropdown.Item onClick={() => value.setLanguageSelected("en")}>
                English
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => value.setLanguageSelected("es")}>
                Spanish
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
