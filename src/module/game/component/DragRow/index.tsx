import React from "react";
import Draggable from "react-draggable";
import "./index.css";
import Piece from "../Piece";
import {Player} from "../../../../type/type";

interface Props {
    currentPlayer: Player;
}

interface State {
    activeDrags: number;
}

class DragRow extends React.PureComponent<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            activeDrags: 0,
        };
    }

    onStart = () => {
        this.setState({activeDrags: this.state.activeDrags + 1});
    };

    onStop = () => {
        this.setState({activeDrags: this.state.activeDrags - 1});
    };

    render() {
        const {currentPlayer} = this.props;
        const dragHandlers = {onStart: this.onStart, onStop: this.onStop};
        return (
            <div className="dragrow">
                <Draggable {...dragHandlers} grid={[100, 100]} bounds="parent">
                    <div className="draggableDiv">
                        <Piece currentPlayer={currentPlayer} />
                    </div>
                </Draggable>
            </div>
        );
    }
}

export default DragRow;
