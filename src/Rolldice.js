import React, { Component } from "react";
import Die from "./Die";
import "./Rolldice.css";

class Rolldice extends Component {
    static defaultProps = {
        nums: ["one", "two", "three", "four", "five", "six"],
    };
    constructor(props) {
        super(props);
        this.state = {
            die1: "one",
            die2: "one",
            rolling: false,
        };
        this.roll = this.roll.bind(this);
    }
    roll() {
        // Pick the rndom number
        const ran1 = this.props.nums[
            Math.floor(Math.random() * this.props.nums.length)
        ];
        const ran2 = this.props.nums[
            Math.floor(Math.random() * this.props.nums.length)
        ];

        // set the state into the new ran
        this.setState({ die1: ran1, die2: ran2, rolling: true });

        // wait one second then change rolling to false
        setTimeout(() => {
            this.setState({ rolling: false });
        }, 1000);
    }
    render() {
        return (
            <div className="Rolldice">
                <div className="Rolldice-container">
                    <Die face={this.state.die1} rolling={this.state.rolling} />
                    <Die face={this.state.die2} rolling={this.state.rolling} />
                </div>
                <button onClick={this.roll} disabled={this.state.rolling}>
                    {this.state.rolling ? "Rolling ... " : "Roll Dice !"}
                </button>
            </div>
        );
    }
}

export default Rolldice;
