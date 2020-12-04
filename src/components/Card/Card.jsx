import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardTitle,
  CardBody,
  Label,
  FormGroup,
  Form,
  Input,
  Button,
} from "reactstrap";

const Cards = () => {
  const [email, setEmail] = useState("angga");
  const [password, setPassword] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    alert("yes");
  };

  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <img
              src={require("../../assets/images/logo-angga.jpg")}
              alt="gambar"
            />
            <CardTitle>angga</CardTitle>
            <CardBody>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
                aliquid similique. Doloremque vero consectetur reprehenderit
                quasi est sapiente accusamus expedita?
              </p>
              <Button>robi</Button>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card>
            <CardTitle>angga</CardTitle>
            <CardBody>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
                aliquid similique. Doloremque vero consectetur reprehenderit
                quasi est sapiente accusamus expedita?
              </p>
              <Button>robi</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Form onSubmit={submitForm}>
          <FormGroup Label="email angga">
            <Label>email</Label>
            <Input
              value={email}
              type="email"
              placeholder="input your email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label>password</Label>
            <Input
              value={password}
              type="password"
              placeholder="input your password "
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormGroup>
          <Button>Submit form</Button>
        </Form>
      </Row>
    </Container>
  );
};

export default Cards;
