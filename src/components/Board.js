import React from "react"
import Tile from "./Tile"
const Board = (props) => {
    const tileComponents = props.tiles.map((tile) => (<Tile key={tile.value} value={tile.value}  isActive={tile.isActive} />))
    const numColumns = Math.sqrt(props.tiles.length)

    return (
        <div className="board" style={{ gridTemplateColumns: "auto ".repeat(numColumns) }}>
            {tileComponents}
        </div>
    )
}

export default Board