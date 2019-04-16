import React from "react";
import "./index.css";
import {Slot} from "component/library/Slot";

interface Props {
    column: number;
    data: string[];
    onHover?: boolean;
}

class Column extends React.PureComponent<Props> {
    static defaultProps = {
        onHover: false,
    }

    render () {
        const {column, data} = this.props;
        const slots = [];
        for(let i = 0; i < 6; i++){
            slots.push(<Slot takenBy={data[i]} key={`${column}-${i}`}/>);
        }
        return (
            <div className="column">
                {slots}
            </div>
        );
    }
}

export default Column;