import React from "react";
import "./index.css";
import Slot from "../../../../component/library/Slot";
import {SlotState} from "../../../../type/type";

interface Props {
    column: number;
    data: SlotState[];
    onHover?: boolean;
}

class Column extends React.Component<Props> {
    static defaultProps = {
        onHover: false,
    };

    render() {
        const {column, data, onHover} = this.props;
        const highlight = onHover ? data.lastIndexOf(SlotState.available) : null;
        const slots: JSX.Element[] = [];
        for (let i = 0; i < 6; i++) {
            slots.push(<Slot takenBy={data[i]} key={`slot-${column}-${i}`} highlight={highlight === i}/>);
        }
        return <div className="column">{slots}</div>;
    }
}

export default Column;
