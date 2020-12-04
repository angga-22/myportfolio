import React from "react";
import { Row, Col } from "reactstrap";
import "./Intro.scss";

const Intro = () => {
  return (
    <Row style={{ marginTop: "50px", display: "flex" }}>
      <Col xs={{ size: 10, offset: 1 }} md={{ size: 8, offset: 3 }}>
        <h4>
          Hello! I'm Angga Saputra a long-life learner & award winning Digital
          <span className="typo"> Designer & Developer</span> with over twelve
          years work experience. I started in my children's room, got pro at
          renowned digital agencies nexum AG and Fork Unstable Media. Now I'm
          based in Bengkulu City, Bengkulu, working for Red Bull fredmansky and
          enjoying the life in the countryside.
        </h4>
        <h4>
          Find out more <span className="find"> about me</span>
        </h4>
      </Col>
    </Row>
  );
};

export default Intro;
