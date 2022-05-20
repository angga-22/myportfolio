import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  NavItem,
  Collapse,
  NavbarToggler,
  NavbarBrand,
} from "reactstrap";
import angga from "../../assets/images/logo-angga.jpg";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { InstagramFilled } from "@ant-design/icons";

const Navbars = () => {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 768px)").matches
  );

  const Responsive = () => {
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);
    return (
      <>
        <Navbar light>
          <NavbarToggler
            onClick={toggleNavbar}
            style={{ backgroundColor: "#C5932C" }}
          />
          <Collapse isOpen={!collapsed} navbar>
            <Nav navbar style={{ marginTop: "40px" }}>
              <NavItem>
                <Link to="/projects" style={{ color: "#fff" }}>
                  Projects
                </Link>
              </NavItem>
              <NavItem style={{ marginTop: "20px" }}>
                <Link to="/about" style={{ color: "#fff" }}>
                  About
                </Link>
              </NavItem>
              <NavItem style={{ marginTop: "20px" }}>
                <Link to="/" style={{ color: "#fff" }}>
                  Contact
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </>
    );
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    });
  });

  return (
    <Container fluid style={{ backgroundColor: "#1d1d1d" }}>
      <Row style={{ padding: "3%" }}>
        <Col xs="3" sm="6" md="6" lg="4" xl="4" id="nav">
          {isMobile ? (
            <Responsive />
          ) : (
            <Navbar style={{ color: "white", fontSize: "1.2em" }}>
              <Nav navbar>
                <NavItem>
                  <Link to="/about" style={{ color: "#fff" }}>
                    About
                  </Link>
                </NavItem>
              </Nav>
              <Nav navbar>
                <NavItem>
                  <Link to="/projects" style={{ color: "#fff" }}>
                    Project
                  </Link>
                </NavItem>
              </Nav>
              <Nav navbar>
                <NavItem>
                  <Link to="/" style={{ color: "#fff" }}>
                    Contact
                  </Link>
                </NavItem>
              </Nav>
            </Navbar>
          )}
        </Col>
        <Col xs="9" sm="6" md="6" lg="8" xl="8">
          <Link to="/">
            <img src={angga} alt="angga" />
            {isMobile ? null : (
              <NavbarBrand id="brand">Angga Saputra</NavbarBrand>
            )}
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Navbars;
