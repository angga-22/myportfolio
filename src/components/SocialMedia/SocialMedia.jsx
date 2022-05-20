import React, { useState, useEffect } from "react";
import { Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import {
  InstagramFilled,
  FacebookFilled,
  TwitterOutlined,
  LinkedinFilled,
  GithubFilled,
} from "@ant-design/icons";
import "./SocialMedia.scss";

const SocialMedia = () => {
  const [isResponsive, setIsResponsive] = useState(
    window.matchMedia("(max-width: 768px)").matches
  );

  const Line = () => {
    return (
      <Row>
        <Col xs={{ size: 11, offset: 2 }} style={{ display: "flex" }}>
          <hr className="line"></hr>
          <Link to="https://www.instagram.com/littletidykid/">
            <InstagramFilled
              style={{
                fontSize: "30px",
                color: "#474747",
                marginRight: "35px",
              }}
            />
          </Link>
          <Link to="https://www.facebook.com/profile.php?id=100000165508833">
            <FacebookFilled
              style={{
                fontSize: "30px",
                color: "#474747",
                marginRight: "35px",
              }}
            />
          </Link>
          <Link to="https://twitter.com/Iittletidykid">
            <TwitterOutlined
              style={{
                fontSize: "30px",
                color: "#474747",
                marginRight: "35px",
              }}
            />
          </Link>
          <Link to="www.linkedin.com/in/angga-saputra-a5a21a172">
            <LinkedinFilled
              style={{
                fontSize: "30px",
                color: "#474747",
                marginRight: "35px",
              }}
            />
          </Link>
          <Link to="https://github.com/angga-22">
            <GithubFilled
              style={{
                fontSize: "30px",
                color: "#474747",
                marginRight: "35px",
              }}
            />
          </Link>
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
    <>
      <Row style={{ marginTop: "80px" }}>
        {isResponsive ? (
          <Col xs={{ size: "auto", offset: 1 }}>
            <Link to="https://www.instagram.com/littletidykid/">
              <InstagramFilled
                style={{
                  fontSize: "30px",
                  color: "#474747",
                  marginRight: "23px",
                }}
              />
            </Link>
            <Link to="https://www.facebook.com/profile.php?id=100000165508833">
              <FacebookFilled
                style={{
                  fontSize: "30px",
                  color: "#474747",
                  marginRight: "23px",
                }}
              />
            </Link>
            <Link to="https://twitter.com/Iittletidykid">
              <TwitterOutlined
                style={{
                  fontSize: "30px",
                  color: "#474747",
                  marginRight: "23px",
                }}
              />
            </Link>
            <Link to="www.linkedin.com/in/angga-saputra-a5a21a172">
              <LinkedinFilled
                style={{
                  fontSize: "30px",
                  color: "#474747",
                  marginRight: "23px",
                }}
              />
            </Link>
            <Link to="https://github.com/angga-22">
              <GithubFilled
                style={{
                  fontSize: "30px",
                  color: "#474747",
                  marginRight: "23px",
                }}
              />
            </Link>
          </Col>
        ) : (
          <Line />
        )}
      </Row>
    </>
  );
};

export default SocialMedia;
