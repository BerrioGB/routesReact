import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Links = () => {
  return (
    <Container id="Contenedor">
      <Row>
        <Col>
          <a href="http://www.easiercomp.com/webapp/arcss" target="iframe">Aplicación de hojas de estilo (CSS)</a>
        </Col>
        <Col>
          <a href="http://www.easiercomp.com/webapp/introjava" target="iframe">Introduccion a Javascript</a>
        </Col>
        <Col>
          <a href="http://www.easiercomp.com/webapp/react" target="iframe">React</a>
        </Col>
      </Row>
      <Row>
        <Col>
          <a href="http://www.easiercomp.com/webapp/cliente" target="iframe">Manipulación de información en el lado del cliente</a>
        </Col>
        <Col>
          <a href="http://www.easiercomp.com/webapp/webapps" target="iframe">WebApps</a>
        </Col>
        <Col>
          <a href="http://www.easiercomp.com/webapp/nodejs" target="iframe">NodeJS. Comunicación síncrona y asíncrona</a>
        </Col>
      </Row>
      <Row>
        <Col>
          <a href="http://www.easiercomp.com/webapp/servidor" target="iframe">Javascript del lado del servidor</a>
        </Col>
        <Col>
          <a href="http://www.easiercomp.com/webapp/sockets" target="iframe">Sockets</a>
        </Col>
        <Col>
          <a href="http://www.easiercomp.com/webapp/conexiondb" target="iframe">Conexión con bases de datos</a>
        </Col>
      </Row>
      <Row>
        <Col>
          <a href="http://www.easiercomp.com/webapp/frameworks" target="iframe">Frameworks MVC populares en la actualidad</a>
        </Col>
        <Col>
          <a href="http://www.easiercomp.com/webapp/introspring" target="iframe">Introducción al desarrollo con Spring Frameworks</a>
        </Col>
        <Col>
          <a href="http://www.easiercomp.com/webapp/construspring" target="iframe">Construcción de servicios web con Spring</a>
        </Col>
      </Row>
      <Row>
        <Col>
          <a href="http://www.easiercomp.com/webapp/conectaspring" target="iframe">Conexión a bases de datos con Spring</a>
        </Col>
        <Col>
          <a href="http://www.easiercomp.com/webapp/vistas" target="iframe">Plantillas y generadores de vistas</a>
        </Col>
        <Col>
          <a href="http://www.easiercomp.com/Files/WebI.pdf" target="iframe">Información sobre el curso</a>
        </Col>
      </Row>
    </Container>
  )
}

export default Links