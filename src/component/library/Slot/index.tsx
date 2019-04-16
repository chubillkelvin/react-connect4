import React from "react";
import "./index.css";
import {SlotState} from "../../../type/type";

interface Props {
    takenBy?: SlotState;
    highlight?: boolean;
}

class Slot extends React.PureComponent<Props> {
    static defaultProps = {
        takenBy: SlotState.available,
        highlight: false,
    };

    render() {
        const {takenBy, highlight} = this.props;
        return <div className={`slot ${takenBy} ${highlight ? "highlight" : null}`} />;
    }
}

export default Slot;
