import React from "react";
import "./index.css";
import {SlotState} from "../../../type/type";

const color1 = "red";
const color2 = "yellow";

interface Props {
    takenBy: SlotState;
    highlight: boolean;
}

class Slot extends React.PureComponent<Props> {
    render() {
        const {takenBy, highlight} = this.props;
        const slotColor = takenBy === SlotState.available ? "" : takenBy === SlotState.player1 ? color1 : color2;
        return <div className={`slot ${slotColor} ${highlight ? "highlight" : ""}`} />;
    }
}

export default Slot;
