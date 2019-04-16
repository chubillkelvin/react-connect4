import React from "react";
import "./index.css";

interface Props {
    takenBy?: "available" | "red" | "yellow";
    highlight?: boolean;
}

class Slot extends React.PureComponent<Props> {
    static defaultProps = {
        takenBy: "available",
        highlight: false,
    };

    render() {
        const {takenBy, highlight} = this.props;
        return <div className={`slot ${takenBy} ${highlight ? "highlight" : null}`} />;
    }
}

export default Slot;
