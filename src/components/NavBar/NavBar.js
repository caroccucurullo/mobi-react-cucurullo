import { Link} from 'react-router-dom'
import { Navbar, Container, Nav} from "react-bootstrap";
import CartWidget from "../CartWidget/CartWidget";
import './NavBar.css';

const NavBar = () => {
    return (

      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand><Link to='/'>
          <img
              src= {'https://firebasestorage.googleapis.com/v0/b/mobi-react-cucurullo.appspot.com/o/logoMobiBlanco.svg?alt=media&token=eec2e857-bab8-4801-95b8-e1e89671569b'}
              className="d-inline-block align-top"
              alt="MOBI logo"
              />
          </Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav className="navbar">
            <Link className='navLink' to='/categoria/SALE'>SALE</Link>
            <Link className='navLink' to='/categoria/NUEVO'>NUEVOS</Link>
            <Link className='navLink' to='/categoria/MÁS VENDIDO'>MÁS VENDIDOS</Link>
            </Nav>
          </Navbar.Collapse>
          <Link to="/cart" ><CartWidget/></Link> 
        </Container>
      </Navbar>
    
    )
}
export default NavBar;