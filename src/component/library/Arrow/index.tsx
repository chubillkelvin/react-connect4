import React from "react";
import "./index.css";

interface Props {
    direction: "left" | "right";
    handleClick?: () => void;
    text?: string;
}

const Arrow: React.FunctionComponent<Props> = (props: Props) => {
    const arrowDirection = `arrow-${props.direction}`;
    return <div className={arrowDirection} onClick={props.handleClick} />;
};

Arrow.defaultProps = {
    handleClick: () => {},
    text: "",
};

export default Arrow;
