import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import CampaignType from "./components/CampaignType";
import CampaignTitle from "./components/CampaignTitle";
import CampaignPurpose from "./components/CampaignPurpose";
import CampaignBrowsing from "./components/CampaignBrowsing";
import Campaign from "./components/Campaign";
import CampaignDetails from "./components/CampaignDetails"; 
import firebase from 'firebase/app';
import 'firebase/firestore';

class App extends React.Component {
  constructor(props) {
    super(props);

    //var mydb = startDB() 
    
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: "AIzaSyBgW25euGpULSICvSS-1EcqDDDVHOVHjNc",
        authDomain: "donaid-442.firebaseapp.com",
        projectId: "donaid-442"
      });
    } 
    
    var fire_db = firebase.firestore();

    this.state = {
      //db: mydb,
      firebase: fire_db 
    }
  }

  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/campaign_type">
            <CampaignType></CampaignType>
          </Route>
          <Route path="/campaign_title">
            <CampaignTitle></CampaignTitle>
          </Route>
          <Route path="/campaign_purpose">
            <CampaignPurpose></CampaignPurpose>
          </Route>
          <Route path="/campaign_details"> 
            <CampaignDetails fireDB = {this.state.firebase}></CampaignDetails>
          </Route>
          <Route path="/" exact>
            <LandingPage></LandingPage>
          </Route>
          <Route path="/campaign_browsing">
            <CampaignBrowsing fireDB = {this.state.firebase}></CampaignBrowsing>
          </Route>
          <Route path="/campaign_information">
            <Campaign fireDB = {this.state.firebase}></Campaign>
          </Route>
          <Route exact path="/about">
          <CampaignType></CampaignType>
          </Route> 
        </Switch>
      </BrowserRouter>
    );
  }
}

// function startDB() {
//   if (window.openDatabase) {
//     var mydb = openDatabase("donaid_db", "1.0", "Database of campaign information",
//                                 2 * 1024 * 1024);

//     mydb.transaction(function (t) {
//     t.executeSql("CREATE TABLE IF NOT EXISTS campaigns (Title TEXT, Type TEXT, Phone Text, Purpose Text, Location Text, Picture Text, Email Text, Number Int, Date Text)");
//     });
//   } 
//   return mydb
// }

export default App;
