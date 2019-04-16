import React from "react";
import Draggable from "react-draggable";
import "./index.css";
import Piece from "../Piece";
import {Player} from "../../../../type/type";

interface Props {
    currentPlayer: Player;
}

class DragRow extends React.PureComponent<Props> {
    render() {
        const {currentPlayer} = this.props;
        return (
            <div className="dragrow">
                <Draggable grid={[100, 100]}>
                    <Piece currentPlayer={currentPlayer} />
                </Draggable>
            </div>
        );
    }
}

export default DragRow;
