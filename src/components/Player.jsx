import React, {useState} from 'react'

const Player = ({name, symbol, isActive, onChangeName}) => {
    const [isEditing, setisEditing] = useState(false);
    const [playerName, setplayerName] = useState(name);

    const handleEditCLick = () => {
        setisEditing(editing => !editing)

        if (isEditing) {
            onChangeName(symbol, playerName)
        }
    }
    return (
        <li className={isActive ? 'active' : undefined}>
            <span className='player'>
                {
                    !isEditing ? (
                        <span 
                            className='player-name'>{playerName}</span>
                    ): (
                        <input 
                            type="text" 
                            required 
                            value={playerName}
                            onChange={e => {
                                setplayerName(e.target.value)
                            }}
                        />
                    )
                }
                <span className='player-symbol'>{symbol}</span>
            </span>
            <button onClick={handleEditCLick}>
                {
                    !isEditing ? 'Edit' : 'Save'
                }
            </button>
        </li>
    )
}

export default Player
