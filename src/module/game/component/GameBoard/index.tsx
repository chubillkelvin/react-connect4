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

    onStop = (e:DraggableEvent, data: DraggableData) => {
        const x = data.x;
        const columnIndex = Math.round(x / 100);
        const newData = [...this.state.data];
        newData[columnIndex][5] = SlotState.red;
        this.setState({data: newData});
    }

    render() {
        const onDragHandler = {onDrag: this.onDrag, onStop: this.onStop};
        const {data, currentPlayer, currentX} = this.state;
        const columns: JSX.Element[] = [];
        for (let i = 0; i < 7; i++) {
            columns.push(<Column data={data[i]} column={i} key={`column-${i}`} />);
        }
        return (
            <div className="container">
                <DragRow currentPlayer={currentPlayer} onDragHandler={onDragHandler} />
                {columns}
            </div>
        );
    }
}

export default GameBoard;
