import React from "react";
import "./index.css";
import Column from "../Column";
import {SlotState} from "../../../../type/type";

const data: SlotState[][] = [
    [SlotState.available, SlotState.available, SlotState.available, SlotState.available, SlotState.available, SlotState.available],
    [SlotState.available, SlotState.available, SlotState.available, SlotState.available, SlotState.available, SlotState.available],
    [SlotState.available, SlotState.available, SlotState.available, SlotState.available, SlotState.available, SlotState.available],
    [SlotState.available, SlotState.available, SlotState.available, SlotState.available, SlotState.available, SlotState.available],
    [SlotState.available, SlotState.available, SlotState.available, SlotState.available, SlotState.available, SlotState.available],
    [SlotState.available, SlotState.available, SlotState.available, SlotState.available, SlotState.available, SlotState.available],
    [SlotState.available, SlotState.available, SlotState.available, SlotState.available, SlotState.available, SlotState.available],
];

class GameBoard extends React.PureComponent {
    render() {
        const columns: JSX.Element[] = [];
        for (let i = 0; i < 7; i++) {
            columns.push(<Column data={data[i]} column={i} key={`column-${i}`} />);
        }
        return <div className="container">{columns}</div>;
    }
}

export default GameBoard;
