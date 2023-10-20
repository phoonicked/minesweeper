import React, {useState} from 'react';
import Board from "./Board";

export default function Game(){
    const [difficulty, setDifficulty] = useState(30);
    const title = "Minesweeper";
    const button= (
        <button>Start</button>
    );
    const handleDifficultyChange = (event) => {
        const selectedDifficulty = parseInt(event.target.value, 10);
        setDifficulty(selectedDifficulty);
    };
    const squares = Array(difficulty).fill(null);
    return(
        <div>
            <div className={"game-board"}>
                <Board squares={squares}/>
            </div>
            <div className={"game-info"}>
                <h1>{title}</h1>
                <label>
                    Select Difficulty:
                    <select value={difficulty} onChange={handleDifficultyChange}>
                        <option value={30}>Easy</option>
                        <option value={90}>Medium</option>
                        <option value={150}>Hard</option>
                    </select>
                </label>
                <div>{button}</div>
            </div>
        </div>
    )
}