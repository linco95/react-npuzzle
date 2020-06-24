import React, { useState, useEffect } from "react"
import Board from "./Board"


const Game = ({ numCols }) => {

    const initialState = () => [...Array(boardSize).keys()].map((e, i) => ({
        value: e,
        isActive: i !== (boardSize - 1)
    }))

    const [boardSize, setBoardSize] = useState(Math.pow(numCols, 2))
    const [tiles, setTiles] = useState(initialState)
    useEffect(() => {
        setTiles(initialState)
    }, [boardSize])

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
                        throw new Error("Invalid move")
                    }
                    swapIndex -= 1
                    break
                case "right":
                    if (emptyIndex % numCols === numCols - 1) {
                        throw new Error("Invalid move")
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
                    throw new Error("unknown input")
            }
            if (swapIndex >= tilesCopy.length || swapIndex < 0) {
                throw new Error("OutOfBounds")
            }
        }
        catch (err) {
            console.log(`Invalid move: ${dir}`)
            return
        }

        [tilesCopy[emptyIndex], tilesCopy[swapIndex]] = [tilesCopy[swapIndex], tilesCopy[emptyIndex]]
        setTiles(tilesCopy)


    }
    let selectedNumCols = Math.sqrt(boardSize)
    return (

        <div>
            <Board tiles={tiles} boardSize={boardSize} />
            <button onClick={() => handleClick("left")}>left</button>
            <button onClick={() => handleClick("up")}>up</button>
            <button onClick={() => handleClick("down")}>down</button>
            <button onClick={() => handleClick("right")}>right</button>
            <button onClick={() => setTiles(initialState)}>reset</button>
            <input type="number" value={selectedNumCols} onChange={(event) => setBoardSize(Math.pow(event.target.value, 2))} />
        </div>
    )
}

export default Game