import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

const Header = ({ name, contactEmail }) => {
  return (
    <div>
      <div className="header_container">
        <Link to="/">
          <h1>{name}.</h1>
        </Link>
        <nav>
          <ul>
            <li>
              <a href="/" className="btnHome">
                Home
              </a>
            </li>
            <li>
              <a href="/" className="btnBrowse">
                Browse
              </a>
            </li>
            <button>
              <li>
                <Link to="/create_campaign">Create Campaign</Link>
              </li>
            </button>
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
