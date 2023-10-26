import React from "react";
import "./mainDisplay.scss";
import NumberDisplay from "./NumberDisplayIndex"
const App: React.FC = () => {

    return (
        <div className="App">
            <div className="Header">
                <NumberDisplay value={0}/>
                <div className="Buttons">
                    Reset
                </div>
                <NumberDisplay value={0}/>
            </div>
            <div className="Body">Body</div>
        </div>
    );
};

export default App;
