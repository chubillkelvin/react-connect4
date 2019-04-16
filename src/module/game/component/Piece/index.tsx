import React from "react";
import "./index.css";
import {Player} from "../../../../type/type";

const color1 = "red";
const color2 = "yellow";

interface Props {
    currentPlayer: Player;
}

class Piece extends React.PureComponent<Props> {
    render() {
        const {currentPlayer} = this.props;
        const pieceColor = currentPlayer === Player.player1 ? color1 : color2;
        return <div className={`${pieceColor} piece`} />;
    }
}

export default Piece;
