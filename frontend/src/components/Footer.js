import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  const currYear = new Date().getFullYear();
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
            <p>ProMarket &copy; {currYear}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
