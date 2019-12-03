import React, {Component} from "react";
import "../styles/CentredContent.css";

class CentredContent extends React.Component {
    shouldComponentUpdate() {
        return false;
    }

    render() {
    return (
        <div className="centred-content"></div>
    );
}
}

export default CentredContent;