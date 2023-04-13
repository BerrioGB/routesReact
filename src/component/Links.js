import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";

const Links = () => {
    return (
      <Container id="Contenedor">
        <Row>
          <Col><Link to="/Css">Aplicación de hojas de estilo (CSS)</Link></Col>
          <Col>
            <Link to="/">Introducción a Javascript</Link>
          </Col>
          <Col>
            <Link to="/">React</Link>
          </Col>
        </Row>
        <Row>
        <Col>
        <Link to="/">Manipulación de información en el lado del cliente</Link>
        </Col>
        <Col>
        <Link to="/">WebApps</Link>
        </Col>
        <Col>
        <Link to="/">NodeJS. Comunicación síncrona y asíncrona</Link>
        </Col>
        </Row>
        <Row>
          <Col> 
          <Link to="/">Javascript del lado del servidor</Link>
          </Col>
          <Col> 
          <Link to="/">Sockets</Link>
          </Col>
          <Col> 
          <Link to="/">Conexión con bases de datos</Link>
          </Col>
        </Row>
        <Row>
          <Col> 
          <Link to="/">Frameworks MVC populares en la actualidad</Link>
          </Col>
          <Col> 
          <Link to="/">Introducción al desarrollo con Spring Frameworks</Link>
          </Col>
          <Col> 
          <Link to="/">Construcción de servicios web con Spring</Link>
          </Col>
        </Row>
        <Row>
          <Col> 
          <Link to="/">Conexión a bases de datos con Spring</Link>
          </Col>
          <Col> 
          <Link to="/">Plantillas y generadores de vistas</Link>
          </Col>
          <Col> 
          <Link to="/">Información sobre el curso</Link>
          </Col>
        </Row>
      </Container>
        )
}

export default Links