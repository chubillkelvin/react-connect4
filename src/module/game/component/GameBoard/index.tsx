import React from "react";
import "./index.css";
import Column from "../Column";
import DragRow from "../DragRow";
import {Player, SlotState} from "../../../../type/type";
import {DraggableData, DraggableEvent} from "react-draggable";

interface State {
    data: SlotState[][];
    currentPlayer: Player;
    currentX: number;
}

class GameBoard extends React.PureComponent<{}, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            data: [
                [SlotState.available, SlotState.available, SlotState.available, SlotState.available, SlotState.available, SlotState.available],
                [SlotState.available, SlotState.available, SlotState.available, SlotState.available, SlotState.available, SlotState.available],
                [SlotState.available, SlotState.available, SlotState.available, SlotState.available, SlotState.available, SlotState.available],
                [SlotState.available, SlotState.available, SlotState.available, SlotState.available, SlotState.available, SlotState.available],
                [SlotState.available, SlotState.available, SlotState.available, SlotState.available, SlotState.available, SlotState.available],
                [SlotState.available, SlotState.available, SlotState.available, SlotState.available, SlotState.available, SlotState.available],
                [SlotState.available, SlotState.available, SlotState.available, SlotState.available, SlotState.available, SlotState.available],
            ],
            currentPlayer: Player.red,
            currentX: 0,
        };
    }

    onDrag = (e: DraggableEvent, data: DraggableData) => {
        this.setState({currentX: data.x});
    };

    render() {
        const {data, currentPlayer, currentX} = this.state;
        const columns: JSX.Element[] = [];
        for (let i = 0; i < 7; i++) {
            columns.push(<Column data={data[i]} column={i} key={`column-${i}`} />);
        }
        return (
            <div className="container">
                <DragRow currentPlayer={currentPlayer} onDrag={this.onDrag} />
                {columns}
            </div>
        );
    }
}

export default GameBoard;
