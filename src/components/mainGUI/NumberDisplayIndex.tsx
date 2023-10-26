import React from "react";
import './NumberDisplay.scss';

interface numberDisplayProps {
    value: number;
}

const NumberDisplay: React.FC<numberDisplayProps> = ({value}) => {
    return <div className="NumberDisplay">{value.toString().padStart(3, "0")}</div>;
};

export default NumberDisplay
