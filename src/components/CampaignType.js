import React from "react";
import Header from "./header";
import data from "./yourdata";
import "../App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Button } from "react-bootstrap";

const CampaignType = () => {
  return (
    <div>
      <Header name={data.name} contactEmail={data.contactEmail}></Header>
      <div className="about_container">
        <h1>1. What is your campaign type?</h1>
        <p>* required information</p>
        <form>
          <label>
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <div ClassName="next_button">
          <Button variant="primary">Next</Button>
        </div>
      </div>
    </div>
  );
};
export default CampaignType;
