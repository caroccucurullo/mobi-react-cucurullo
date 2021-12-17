import { Link} from 'react-router-dom'
import { Navbar, Container, Nav} from "react-bootstrap";
import CartWidget from "./CartWidget";
import logo from '../img/logoMobiBlanco.svg';

const NavBar = () => {
    return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand><Link to='/'>
          <img
              src= {logo}
              className="d-inline-block align-top"
              alt="MOBI logo"
              />
          </Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav>
            <Nav.Link><Link to='/categoria/SALE'>SALE</Link></Nav.Link>
            <Nav.Link><Link to='/categoria/NUEVO'>NUEVOS</Link></Nav.Link>
            <Nav.Link><Link to='/categoria/MÁS VENDIDO'>MÁS VENDIDOS</Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        
        </Container>
        
        <Link to="/cart" ><CartWidget/></Link> 
      </Navbar>
    </div>
    )
}
export default NavBar;