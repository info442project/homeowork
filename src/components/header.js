import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import arrow from "../img/arrow.png";
const Header = ({ name }) => {
  return (
    <div className="top_nav" style={{height: "150px", background: "linear-gradient(rgba(213, 232, 246, 1), rgba(213, 232, 246, 0))", marginRight: "-170px", marginLeft: "-170px" }}>
      <div className="header_container">
        <Link to="/">
            <h1>{name}.</h1>
        </Link>
        <nav>
          <ul style={{padding: "30px"}}>
            <li style={{paddingTop: "30px"}}>
              <a href="/" className="btnHome">
                Home
              </a>
            </li>
            <li>
              <Link className="btnBrowse" to="/campaign_browsing">
                Browse
              </Link>
            </li>
            <li>
              <Link to="/campaign_type">
                <Button className="btnCreate" style={{height: "50px", width: "200px"}}>
                  Create Campaign
                  <img src={arrow}></img>
              </Button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
