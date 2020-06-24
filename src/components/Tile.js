import React from "react"

const Tile = (props) => {

    return (
        <div className="tile" style={{ visibility: props.isActive ? "visible" : "hidden" }}>
            <p>tile {props.value}</p>
        </div>
    )
}

export default Tile