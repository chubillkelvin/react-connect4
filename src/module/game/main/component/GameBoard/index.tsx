import React from "react";
import "./index.css";
import Column from "../component/Column";
import DragRow from "../component/DragRow";
import {Player, SlotState} from "../../../../type/type";
import {DraggableData, DraggableEvent} from "react-draggable";

interface State {
    data: SlotState[][];
    currentPlayer: Player;
    currentX: number;
    dragging: boolean;
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
            currentPlayer: Player.player1,
            currentX: 0,
            dragging: false,
        };
    }

    onStart = () => {
        this.setState({dragging: true});
    };

    onDrag = (e: DraggableEvent, data: DraggableData) => {
        this.setState({currentX: data.x});
    };

    onStop = (e: DraggableEvent, data: DraggableData) => {
        const x = data.x;
        const {currentPlayer} = this.state;
        const newData = [...this.state.data];
        const columnIndex = Math.round(x / 100);
        const rowIndex = newData[columnIndex].lastIndexOf(SlotState.available);
        if (rowIndex === -1) {
            this.setState({dragging: false});
        } else {
            newData[columnIndex][rowIndex] = currentPlayer as number;
            this.setState({data: newData, dragging: false, currentPlayer: currentPlayer === Player.player1 ? Player.player2 : Player.player1});
        }
    };

    render() {
        const onDragHandler = {onStart: this.onStart, onDrag: this.onDrag, onStop: this.onStop};
        const {data, currentPlayer, currentX, dragging} = this.state;
        const columns: JSX.Element[] = [];
        for (let i = 0; i < 7; i++) {
            columns.push(<Column data={data[i]} column={i} key={`column-${i}`} onHover={dragging && Math.round(currentX / 100) === i} />);
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