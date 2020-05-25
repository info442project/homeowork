import React from "react";
import Header from "./header";
import Footer from "./Footer";
import data from "./yourdata";
import "../App.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
// import { Card } from "react-bootstrap";
// import "/bootstrap/dist/css/bootstrap.css";

const CampaignType = () => {
  localStorage.setItem("Type", "")

  return (
    <div>
      <Header name={data.name} contactEmail={data.contactEmail}></Header>
      <div className="about_container">
        <h1>1. What is your campaign type?</h1>
        <p className="titleP">* required information</p>
        <div className="cards row">
          <Example cardContents={teams} />
        </div>
      </div>
      <Footer
        contactEmail={data.contactEmail}
        socialLinks={data.social}
      ></Footer>
    </div>
  );
};

class Card extends React.Component {
  render() {
    return <div className="card col">{this.props.children}</div>;
  }
}

class SelectableCard extends React.Component {
  render() {
    var isSelected = this.props.selected ? "selected" : "";
    var className = "selectable " + isSelected;
    return (
      <Card>
        <div className={className} onClick={this.props.onClick}>
          {this.props.children}
          <div className="check">
            <span className="checkmark">✔</span>
          </div>
        </div>
      </Card>
    );
  }
}

class SelectableTitleCard extends React.Component {
  render() {
    var { title, description, selected } = this.props;
    return (
      <SelectableCard onClick={this.props.onClick} selected={selected}>
        <div className="content">
          <h1 className="title">{title}</h1>

          {/*<p className="description">{description}</p>*/}
        </div>
      </SelectableCard>
    );
  }
}

class SelectableCardList extends React.Component {
  constructor(props) {
    super(props);
    var selected = props.multiple ? [] : -1;
    var initialState = {
      selected: selected,
    };
    this.state = initialState;
  }

  onItemSelected(index) {
    this.setState((prevState, props) => {
      if (props.multiple) {
        var selectedIndexes = prevState.selected;
        var selectedIndex = selectedIndexes.indexOf(index);
        if (selectedIndex > -1) {
          selectedIndexes.splice(selectedIndex, 1);
          props.onChange(selectedIndexes);
        } else {
          if (!(selectedIndexes.length >= props.maxSelectable)) {
            selectedIndexes.push(index);
            props.onChange(selectedIndexes);
          }
        }
        return {
          selected: selectedIndexes,
        };
      } else {
        props.onChange(index);
        return {
          selected: index,
        };
      }
    });
  }

  render() {
    var { contents, multiple } = this.props;

    var content = contents.map((cardContent, i) => {
      var { title, description, selected } = cardContent;
      var selected = multiple
        ? this.state.selected.indexOf(i) > -1
        : this.state.selected == i;
      return (
        <SelectableTitleCard
          key={i}
          title={title}
          description={description}
          selected={selected}
          onClick={(e) => this.onItemSelected(i)}
        />
      );
    });
    return <div class="row">{content}</div>;
  }
}

class Example extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: -1,
      clickAble: false
    }
  }

  onListChanged(selected) {
    this.setState({
      selected: selected,
      clickAble: true
    });
  }

  //this will need to be worked on in the backend right now it doesnt work.
  submit() {
  
    if (this.state.selected === 0) {
      localStorage.setItem("Type", "Money");
      window.alert("Selected: Money");
    } else if (this.state.selected === 1) {
      localStorage.setItem("Type", "Supplies");
      window.alert("Selected: Supplies");
    } else if (this.state.selected === 2) {
      localStorage.setItem("Type", "Human Resources");
      window.alert("Selected: Human Resources");
    } 
  }

  submitNothing(e) {
    e.preventDefault()
    window.alert("Must choose a type");
  }

  render() {
    return (
      <div className="container">
        <SelectableCardList
          multiple={this.props.multiple}
          maxSelectable={this.props.maxSelectable}
          contents={this.props.cardContents}
          onChange={this.onListChanged.bind(this)}
        />
        {
          this.state.clickAble
          ? <Link to="/campaign_title">
            <Button
              id="next_button"
              variant="primary"
              onClick={(e) => this.submit()}
            >
              Next
            </Button>
          </Link>
          : <Link to="/campaign_title">
          <Button
            id="next_button"
            variant="primary"
            onClick={(event) => this.submitNothing(event)}
          >
            Next
          </Button>
        </Link>
        }     
      </div>
    );
  }
}

var teams = [
  {
    title: "Money",
    description: "Funding resources for institutions",
  },
  {
    title: "Supplies",
    description: "Physical objects needed",
  },
  {
    title: "Human Resources",
    description: "I have no idea what this is",
  },
];

export default CampaignType;
