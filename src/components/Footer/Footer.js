import { Container } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
      <Container fluid className="container-fluid footer">
        <div className="row">
          <div className="col-lg-12 d-flex flex-row justify-content-center mt-2">
          </div>
          <div className="col-lg-12 d-flex flex-row justify-content-center mt-4">
            <div>
              <h6 className="text-center">
              MOBI 2022 | Todos los derechos reservados
              </h6>
            </div>
          </div>
        </div>
      </Container>
    );
  };
  
  export default Footer;