import React, { Component } from "react";
import RollDice from "./Rolldice";
// import Die from "./Die";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div className="App">
                <RollDice />
            </div>
        );
    }
}

export default App;
