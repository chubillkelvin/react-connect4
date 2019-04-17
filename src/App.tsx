import React from "react";
import "./App.css";
import MainComponent from "./module/game/main";

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <MainComponent />
            </div>
        );
    }
}

export default App;
