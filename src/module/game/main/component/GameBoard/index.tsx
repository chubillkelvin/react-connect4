import React from "react";
import "./index.css";
import Column from "../Column";
import DragRow from "../DragRow";
import WinMessage from "../WinMessage";
import {RootState} from "../../../../../type/state";
import {connect} from "react-redux";
import {bindActionCreators, Dispatch} from "redux";
import Arrow from "../../../../../component/library/Arrow";
import {onStepBackwardClick, onStepForwardClick} from "../../../../../store/actions/game";

interface StateProps {
    playTickSound: boolean;
}

interface DispatchProps {
    onStepBackwardClick: () => void;
    onStepForwardClick: () => void;
}

interface Props extends StateProps, DispatchProps {}

class GameBoard extends React.PureComponent<Props> {
    render() {
        const {playTickSound, onStepBackwardClick, onStepForwardClick} = this.props;
        const columns: JSX.Element[] = [];
        for (let i = 0; i < 7; i++) {
            columns.push(<Column column={i} key={`column-${i}`} />);
        }
        return (
            <div className="container">
                <DragRow />
                <div>{columns}</div>
                <div className="arrow-container">
                    <Arrow direction={"left"} handleClick={onStepBackwardClick} />
                    <Arrow direction={"right"} handleClick={onStepForwardClick} />
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

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({onStepBackwardClick, onStepForwardClick}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameBoard);
