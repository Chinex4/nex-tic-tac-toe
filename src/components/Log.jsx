import React from 'react'

const Log = ({ turns }) => {
    return (
        <ol id='log'>
            {
                turns.map((turn, i) => {
                    return <li
                        key={`${turn.square.row} ${turn.square.col}`}>
                        {turn.player} selected {turn.square.row}, {turn.square.col}
                    </li>
                })
            }
        </ol>
    )
}

export default Log
