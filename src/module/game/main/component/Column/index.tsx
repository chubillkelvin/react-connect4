import React from "react";
import "./index.css";
import Slot from "../../../../../component/library/Slot";
import {SlotState} from "../../../../../type/type";
import {RootState} from "../../../../../type/state";
import {connect} from "react-redux";

interface StateProps {
    history: SlotState[][][];
    step: number;
    dragging: boolean;
    currentX: number;
}

interface Props extends StateProps {
    column: number;
}

class Column extends React.PureComponent<Props> {
    render() {
        const {column, history, step, dragging, currentX} = this.props;
        const data = history[step];
        const columnData = data[column];
        const highlight = dragging && Math.round(currentX / 100) === column ? columnData.lastIndexOf(SlotState.available) : null;
        const slots: JSX.Element[] = [];
        for (let i = 0; i < 6; i++) {
            slots.push(<Slot takenBy={columnData[i]} key={`slot-${column}-${i}`} highlight={highlight === i} />);
        }
        return <div className="column">{slots}</div>;
    }
}

const mapStateToProps = (state: RootState): StateProps => ({
    history: state.game.history,
    step: state.game.step,
    dragging: state.game.dragging,
    currentX: state.game.currentX,
});

export default connect(mapStateToProps)(Column);
