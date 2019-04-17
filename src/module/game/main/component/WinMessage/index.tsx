import React from "react";
import "./index.css";
import {Player} from "../../../../../type/type";
import {RootState} from "../../../../../type/state";
import {connect} from "react-redux";

const color1 = "red";
const color2 = "yellow";

interface StateProps {
    winner: Player | null;
}

interface Props extends StateProps {}

class WinMessage extends React.PureComponent<Props> {
    render() {
        const {winner} = this.props;
        const messageColor = winner === null ? null : winner === Player.player1 ? color1 : color2;
        return winner === null ? null : <h1 className={`${messageColor}-font message`}>{`Player ${winner + 1} wins!`}</h1>;
    }
}

const mapStateToProps = (state: RootState): StateProps => ({
    winner: state.game.winner,
});

export default connect(mapStateToProps)(WinMessage);
