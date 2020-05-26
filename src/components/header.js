import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import arrow from "../img/arrow.png";
const Header = ({ name, contactEmail }) => {
  return (
    <div className="top_nav" style={{height: "150px", background: "linear-gradient(rgba(213, 232, 246, 1), rgba(213, 232, 246, 0))", marginRight: "-170px", marginLeft: "-170px" }}>
      <div className="header_container">
        <Link to="/">
          <h1>{name}.</h1>
        </Link>
        <nav>
          <ul>
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

        {/* <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand" href="/">
                        <img className="navPic" src="./img/Donaid_Logo.png" width="50" height="50" className="d-inline-block align-top" alt=""></img>
                        <span className="navBrand">Donaid</span>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
      
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                            <a className="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <button id = "createCampaign" className="btn btn-outline-success my-2 my-sm-0" type="submit">Create Campaign</button>
                        </form>
                    </div>
                 </nav> */}
      </div>
    </div>
  );
};

export default Header;
