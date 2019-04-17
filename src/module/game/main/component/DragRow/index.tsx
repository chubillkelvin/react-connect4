import React from "react";
import Draggable, {DraggableData, DraggableEvent} from "react-draggable";
import "./index.css";
import Piece from "../Piece";
import {connect} from "react-redux";
import * as actions from "../../../../../store/actions/game";
import {Dispatch} from "redux";

const createHandlers = (dispatch: Dispatch) => {
    const onStart = () => {
        dispatch(actions.onStart());
    };

    const onDrag = (e: DraggableEvent, data: DraggableData) => {
        dispatch(actions.onDrag(e, data));
    };

    const onStop = (e: DraggableEvent, data: DraggableData) => {
        dispatch(actions.onStop(e, data));
    };
    return {onStart, onDrag, onStop};
};

interface Props {
    dispatch: Dispatch;
}

class DragRow extends React.PureComponent<Props> {
    render() {
        return (
            <div className="dragrow">
                <Draggable {...createHandlers(this.props.dispatch)} grid={[100, 100]} bounds="parent">
                    <div className="draggableDiv">
                        <Piece />
                    </div>
                </Draggable>
            </div>
        );
    }
}

export default connect()(DragRow);
