import React, { useState } from 'react'



const GameBoard = ({ onSelctSquare, board }) => {

    return (
        <ol id='game-board'>
            {
                board.map((row, rowIndex) => {
                    return <li key={rowIndex}>
                        <ol>
                            {
                                row.map((playerSymbol, colIndex) => {
                                    return <li key={colIndex}>
                                        <button disabled={playerSymbol !== null} onClick={() => onSelctSquare(rowIndex, colIndex)}>
                                            {playerSymbol}
                                        </button>
                                    </li>
                                })
                            }
                        </ol>
                    </li>
                })
            }
        </ol>
    )
}

export default GameBoard
