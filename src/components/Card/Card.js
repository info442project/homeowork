import React, { Component } from "react";

export class Card extends Component {
    render() {
        return (
            <div className="card" style={{display: "inline-block"}}>
                <div className="header">
                    <h6 className="title">
                        {this.props.title}
                    </h6>
                </div>
                <div className="content">
                    {this.props.content}
                </div>
            </div>
        );
    }
}

export default Card;