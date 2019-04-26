import React from "react";
import "./index.css";
import {PickOptional} from "../../../type/type";

interface Props {
    direction: "left" | "right";
    handleClick?: () => void;
    text?: string;
}

class Arrow extends React.PureComponent<Props> {
    static defaultProps: PickOptional<Props> = {
        handleClick: () => {},
        text: "",
    };

    render() {
        const arrowDirection = `arrow-${this.props.direction}`;
        return <div className={arrowDirection} onClick={this.props.handleClick} />;
    }
}

export default Arrow;
