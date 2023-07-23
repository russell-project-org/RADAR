import { Link } from 'react-router-dom';
import { Navbar } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

export function NavBarElectron() {
  return (
    <Navbar bg="primary" data-bs-theme="dark" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">
          RADAR
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">
            DashBoard
          </Nav.Link>
          <Nav.Link as={Link} to="/todo">
            ToDoList
          </Nav.Link>
          <Nav.Link as={Link} to="/timetable">
            Timetable
          </Nav.Link>
          <Nav.Link as={Link} to="/notes">
            My Notes
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBarElectron;
