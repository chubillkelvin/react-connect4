import React from "react";
import "./index.css";
import Column from "../Column";
import DragRow from "../DragRow";
import WinMessage from "../WinMessage";

class GameBoard extends React.PureComponent<{}> {
    render() {
        const columns: JSX.Element[] = [];
        for (let i = 0; i < 7; i++) {
            columns.push(<Column column={i} key={`column-${i}`} />);
        }
        return (
            <div className="container">
                <DragRow />
                {columns}
                <WinMessage />
            </div>
        );
    }
}

export default GameBoard;
