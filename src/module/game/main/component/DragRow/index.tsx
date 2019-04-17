import React from "react";
import Draggable, {DraggableData, DraggableEvent} from "react-draggable";
import "./index.css";
import Piece from "../Piece";
import {connect} from "react-redux";
import * as actions from "../../../../../store/actions/game";
import {Dispatch} from "redux";
import {Player} from "../../../../../type/type";
import {RootState} from "../../../../../type/state";
import PromptMessage from "../PromptMessage";

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

interface StateProps {
    winner: Player | null;
    showPrompt: boolean;
}

interface Props extends StateProps {
    dispatch: Dispatch;
}

class DragRow extends React.PureComponent<Props> {
    render() {
        const {winner, showPrompt} = this.props;
        return (
            <div className="dragrow">
                {showPrompt && <PromptMessage />}
                <Draggable {...createHandlers(this.props.dispatch)} grid={[100, 100]} bounds="parent" disabled={winner !== null}>
                    <div className="draggableDiv">
                        <Piece />
                    </div>
                </Draggable>
            </div>
        );
    }
}

const mapStateToProps = (state: RootState): StateProps => ({
    winner: state.game.winner,
    showPrompt: state.game.showPrompt,
});

export default connect(mapStateToProps)(DragRow);
