import React from "react";
import Navbars from "../../components/NavBar/Navbar";
import { Container, Row, Col } from "reactstrap";
import SocialMedia from "../../components/SocialMedia/SocialMedia";
import "./HomePage.scss";
import Intro from "../../components/Intro/Intro";
import zigzag from "../../assets/images/zigzag.svg";
import Letter from "../../components/Letter/Letter";
import JumboCard from "../../components/JumboCard/JumboCard";
import Cards from "../../components/Card/Card";

const HomePage = () => {
  return (
    <Container fluid style={{ backgroundColor: "#1d1d1d" }}>
      <Row style={{ color: "#fff" }}>
        <Letter />
      </Row>
      <Row>
        <Col>
          <SocialMedia />
        </Col>
      </Row>
      <Row>
        <Col>
          <Intro />
        </Col>
      </Row>
      <Row>
        <img src={zigzag} alt="zigzag" className="zigzag" />
      </Row>
      <Row>
        <Col>
          <JumboCard />
        </Col>
      </Row>
      <Row>
        <img src={zigzag} alt="zigzag" className="zigzag" />
      </Row>
      <Row>
        <Cards />
      </Row>
    </Container>
  );
};

export default HomePage;
