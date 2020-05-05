import React from 'react';
import Header from './header';
import data from './yourdata';

const About = () => {
  return (
    <div>
      <Header name={data.name} contactEmail={data.contactEmail}></Header>
      <div className="about_container">
        <h1>1. What is your campaign type?</h1>
        <form>
          <label>
            <input type="text" name="name" />
          </label>
          <input type="submit" value="Submit" />
        </form>

      </div>
    </div>
  );
}
export default About;