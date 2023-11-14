import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Fastech</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">My Profile</Nav.Link>
            <Nav.Link href="#link">Activity</Nav.Link>
            <Nav.Link href="#link">How IT Works</Nav.Link>
          </Nav>
          <button>CREATE</button>
          <button>SIGN IN</button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
