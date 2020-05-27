import React, { Component } from "react";

export class Card extends Component {
    render() {
        return (
            <div className="card" style={{display: "inline-block"}}>
                <div className="header">
                    <h3 className="title">
                        {this.props.title}
                    </h3>
                </div>
                <div className="content">
                    {this.props.content}
                </div>
            </div>
        );
    }
}

export default Card;