import React from "react";
import Draggable, {DraggableEventHandler} from "react-draggable";
import "./index.css";
import Piece from "../Piece";
import {Player} from "../../../../type/type";

interface OnDragHandlers {
    onDrag: DraggableEventHandler;
    onStop: DraggableEventHandler;
}

interface Props {
    currentPlayer: Player;
    onDragHandler: OnDragHandlers;
}

class DragRow extends React.PureComponent<Props> {
    render() {
        const {currentPlayer, onDragHandler} = this.props;
        return (
            <div className="dragrow">
                <Draggable {...onDragHandler} grid={[100, 100]} bounds="parent">
                    <div className="draggableDiv">
                        <Piece currentPlayer={currentPlayer} />
                    </div>
                </Draggable>
            </div>
        );
    }
}

export default DragRow;
