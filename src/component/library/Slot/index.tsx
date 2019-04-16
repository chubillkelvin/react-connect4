import React from "react";
import "./index.css";

interface Props {
    row: number;
    column: number;
    takenBy?: "available" | "red" | "yellow";
}

class Slot extends React.PureComponent<Props> {
    static defaultProps = {
        takenBy: "available",
    };

    render() {
        const {takenBy} = this.props;
        return <div className={`slot ${takenBy}`} />;
    }
}

export default Slot;
