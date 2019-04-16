import React from "react";
import "./index.css";
import {Player} from "../../../../type/type";

interface Props {
    currentPlayer: Player;
}

class Piece extends React.PureComponent<Props> {
    render() {
        const {currentPlayer} = this.props;
        return <div className={`${currentPlayer} piece`} />;
    }
}

export default Piece;
