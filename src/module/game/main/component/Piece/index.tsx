import React, {createRef} from "react";
import "./index.css";
import {Player} from "../../../../../type/type";
import {RootState} from "../../../../../type/state";
import {connect} from "react-redux";

const color1 = "red";
const color2 = "yellow";

interface StateProps {
    currentPlayer: Player;
    playTickSound: boolean;
}

interface Props extends StateProps {}

class Piece extends React.PureComponent<Props> {
    private soundRef = createRef<HTMLAudioElement>();

    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<{}>, snapshot?: any): void {
        if (this.props.playTickSound && prevProps.currentPlayer !== this.props.currentPlayer) {
            const sound = this.soundRef.current!;
            sound.play();
        }
    }

    render() {
        const {currentPlayer} = this.props;
        const pieceColor = currentPlayer === Player.player1 ? color1 : color2;
        return (
            <div className={`${pieceColor} piece`}>
                <audio autoPlay ref={this.soundRef} src={require("../../../../../asset/sound/tick.wav")} />
            </div>
        );
    }
}

const mapStateToProps = (state: RootState): StateProps => ({
    currentPlayer: state.game.currentPlayer,
    playTickSound: state.game.playTickSound,
});

export default connect(mapStateToProps)(Piece);
