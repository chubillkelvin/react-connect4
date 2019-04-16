import React from "react";
import Draggable from "react-draggable";
import "./index.css";

class DragRow extends React.PureComponent {
    render() {
        return (
            <Draggable grid={[100, 100]}>
                <div className="dragrow" />
            </Draggable>
        );
    }
}

export default DragRow;
