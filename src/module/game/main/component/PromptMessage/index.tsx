import React from "react";
import "./index.css";

class PromptMessage extends React.PureComponent<{}> {
    render() {
        return (
            <div className="prompt">
                <div className="cursor" />
                <div className="prompt-message">
                    <p>Drag to play</p>
                </div>
            </div>
        );
    }
}

export default PromptMessage;
