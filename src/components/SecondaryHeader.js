import React from 'react';

const container = {
    display: "flex",
    flexFlow: "row wrap",
    width: "90%",
    maxWidth: "1400px",
    marginRight: "auto",
    marginLeft: "auto"
}

const pStyle = {
    letterSpacing: "-1px",
    fontSize: "2.4rem",
    // marginBottom: "2.5em",
    paddingTop: "4rem"
}

const SecondaryHeader = props => {
    return (
        <div style={container} id={props.id}>
            <p style={pStyle}>{props.secondaryHeader}</p>
        </div>
    )
}

export default SecondaryHeader;