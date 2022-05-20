import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "reactstrap";
import jumboCard from "../../assets/images/REGISTER.png";
import "./JumboCard.scss";

const JumboCard = () => {
  const [isResponsive, setIsResponsive] = useState(
    window.matchMedia("(max-width: 768px)").matches
  );

  const Line = () => {
    return (
      <Row>
        <Col xs={{ size: 11, offset: 2 }} style={{ display: "flex" }}>
          <hr className="line"></hr>
          <h5>satu</h5>
          <h5>satu</h5>
          <h5>satu</h5>
          <h5>satu</h5>
        </Col>
      </Row>
    );
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsResponsive(window.matchMedia("(max-width: 768px)").matches);
    });
  });

  return (
    <Container>
      <Row style={{ marginBottom: "50px" }}>
        <Col xs={{ size: "11", offset: 1 }}>
          <h2 className="title-jumbo-card">
            {" "}
            Tinpet - Meeting and Finding your pet's couple
          </h2>
        </Col>
      </Row>
      <Row style={{ marginBottom: "55px" }}>
        {isResponsive ? (
          <Col
            xs={{ size: 11, offset: 1 }}
            style={{ display: "flex", flexWrap: "wrap" }}
          >
            <h5>satu</h5>
            <h5>satu</h5>
            <h5>satu</h5>
            <h5>satu</h5>
          </Col>
        ) : (
          <Line />
        )}
      </Row>
      <Row style={{ marginBottom: "50px" }}>
        <Col xs={{ size: 10, offset: 1 }} md={{ size: 8, offset: 3 }}>
          <h4>
            {" "}
            Tinpet is basically an app for finding your pet's couple, tinpet has
            some feature such as create post, request meeting, sending message,
            comment, like, just like another social media app.{" "}
          </h4>
        </Col>
      </Row>
      <Row style={{ justifyContent: "center" }}>
        <div className="wrapper-jumbo-card">
          <img src={jumboCard} alt="jumbo-card" className="jumbo-card" />
        </div>
      </Row>
    </Container>
  );
};

export default JumboCard;
