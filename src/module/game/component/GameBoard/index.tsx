import React from "react";
import "./index.css";
import Column from "../Column";
import DragRow from "../DragRow";
import {Player, SlotState} from "../../../../type/type";

interface State {
    data: SlotState[][];
    currentPlayer: Player;
}

class GameBoard extends React.PureComponent<{}, State> {
    constructor (props: any) {
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
        }
    }


    render() {
        const {data, currentPlayer} = this.state;
        const columns: JSX.Element[] = [];
        for (let i = 0; i < 7; i++) {
            columns.push(<Column data={data[i]} column={i} key={`column-${i}`} />);
        }
        return (
            <div className="container">
                <DragRow currentPlayer={currentPlayer}/>
                {columns}
            </div>
        );
    }
}

export default GameBoard;
