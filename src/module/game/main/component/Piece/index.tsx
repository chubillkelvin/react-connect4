import React from "react";
import "./index.css";
import {Player} from "../../../../../type/type";
import {RootState} from "../../../../../type/state";
import {connect} from "react-redux";

const color1 = "red";
const color2 = "yellow";

interface StateProps {
    currentPlayer: Player;
}

interface Props extends StateProps {}

class Piece extends React.PureComponent<Props> {
    render() {
        const {currentPlayer} = this.props;
        const pieceColor = currentPlayer === Player.player1 ? color1 : color2;
        return <div className={`${pieceColor} piece`} />;
    }
}

const mapStateToProps = (state: RootState): StateProps => ({
    currentPlayer: state.game.currentPlayer,
});

export default connect(mapStateToProps)(Piece);
