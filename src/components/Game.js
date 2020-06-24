import React, { useState } from "react"
import Board from "./Board"


const Game = ({ boardSize }) => {
    boardSize *= boardSize
    const initialState = [...Array(boardSize).keys()].map((e, i) => ({
        value: e,
        isActive: i !== (boardSize - 1)
    }))

    const [tiles, setTiles] = useState(initialState)

    const handleClick = (dir) => {
        console.log(dir)
        const tilesCopy = tiles.slice()
        const emptyIndex = tilesCopy.findIndex(e => e.value === (boardSize - 1))
        const numCols = Math.sqrt(boardSize)

        let swapIndex = emptyIndex
        try {
            switch (dir) {
                case "left":
                    if (emptyIndex % numCols === 0) {
                        throw "Invalid move"
                    }
                    swapIndex -= 1
                    break
                case "right":
                    if (emptyIndex % numCols === numCols - 1) {
                        throw "Invalid move"
                    }
                    swapIndex += 1
                    break
                case "up":
                    swapIndex -= numCols
                    break
                case "down":
                    swapIndex += numCols
                    break
                default:
                    throw "unknown input"
            }
            if (swapIndex >= tilesCopy.length || swapIndex < 0) {
                throw "OutOfBounds"
            }
        }
        catch (err) {
            console.log(`Invalid move: ${dir}`)
            return
        }

        [tilesCopy[emptyIndex], tilesCopy[swapIndex]] = [tilesCopy[swapIndex], tilesCopy[emptyIndex]]
        setTiles(tilesCopy)


    }

    return (
        <div>
            <Board tiles={tiles} boardSize={boardSize} />
            <button onClick={() => handleClick("left")}>left</button>
            <button onClick={() => handleClick("up")}>up</button>
            <button onClick={() => handleClick("down")}>down</button>
            <button onClick={() => handleClick("right")}>right</button>
            <button onClick={() => setTiles(initialState)}>reset</button>
        </div>
    )
}

export default Game