import React from "react";
import "./index.css";
import Slot from "../../../../../component/library/Slot";
import {SlotState} from "../../../../../type/type";
import {RootState} from "../../../../../type/state";
import {connect} from "react-redux";

interface StateProps {
    data: SlotState[][];
    dragging: boolean;
    currentX: number;
}

interface Props extends StateProps {
    column: number;
}

class Column extends React.PureComponent<Props> {
    render() {
        const {column, data, dragging, currentX} = this.props;
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
    data: state.game.data,
    dragging: state.game.dragging,
    currentX: state.game.currentX,
});

export default connect(mapStateToProps)(Column);
