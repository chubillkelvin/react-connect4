import React from "react";
import "./index.css";
import Column from "../Column";
import DragRow from "../DragRow";
import WinMessage from "../WinMessage";
import {RootState} from "../../../../../type/state";
import {connect} from "react-redux";
import Arrow from "../../../../../component/library/Arrow";

interface StateProps {
    playTickSound: boolean;
}

interface Props extends StateProps {}

class GameBoard extends React.PureComponent<Props> {
    render() {
        const {playTickSound} = this.props;
        const columns: JSX.Element[] = [];
        for (let i = 0; i < 7; i++) {
            columns.push(<Column column={i} key={`column-${i}`} />);
        }
        return (
            <div className="container">
                <DragRow />
                <div>{columns}</div>
                <div className="arrow-container">
                    <Arrow direction={"left"} />
                    <Arrow direction={"right"} />
                </div>
                <WinMessage />
                {playTickSound && <audio autoPlay src={require("../../../../../asset/sound/tick.wav")} />}
            </div>
        );
    }
}

const mapStateToProps = (state: RootState): StateProps => ({
    playTickSound: state.game.playTickSound,
});

export default connect(mapStateToProps)(GameBoard);
