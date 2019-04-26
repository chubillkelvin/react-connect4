import React from "react";
import "./index.css";

interface Props {
    direction: "left" | "right";
    handleClick?: () => void;
}

const Arrow: React.FunctionComponent<Props> = (props: Props) => {
    const arrowDirection = `arrow-${props.direction}`;
    return <div className={arrowDirection} onClick={props.handleClick} />;
};

Arrow.defaultProps = {
    handleClick: () => {},
};

export default Arrow;
