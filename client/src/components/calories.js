import React, { useState } from 'react';
import '../App.css';

function Calories() {
    const [goal, setGoal] = useState(2000)
    const [buttonSetGoal, setButtonSetGoal] = useState(false)
    const [currentCals, setCurrentCals] = useState(0)
    const [buttonSetCals, setButtonSetCals] = useState(false)

    const handleSetGoal = (e) => {
        e.preventDefault()
        setGoal(e.target.value)
    }

    const handleButtonSetGoal = (e) => {
        e.preventDefault()
        setButtonSetGoal(!buttonSetGoal)
    }

    const handleSetCals = (e) => {
        e.preventDefault();
        setCurrentCals(e.target.value)
    }

    const handleButtonSetCals = (e) => {
        e.preventDefault()
        setButtonSetCals(!buttonSetCals)
    }

    return (
        <div className='sections'>
            <h1>Calories/ Marcos</h1>
            <div className='caloriesBar'>
                <p>0</p>
                <div className='prgressBar colorBar'></div>
                <div className='prgressBar'>{currentCals}</div>
                <p>{goal}</p>
            </div>
            {buttonSetGoal ?
            <form onSubmit={handleButtonSetGoal}>
                <input
                    type = 'number'
                    name= 'inputGoal'
                    value = {goal}
                    placeholder='Target Calorie Amount'
                    onChange={handleSetGoal}
                ></input>
                <button type='submit'>Enter</button>
            </form> :
            <button onClick={handleButtonSetGoal}>Set Goal</button>
            }
             
            {buttonSetCals ?
            <form onSubmit={handleButtonSetCals}>
                <input
                    type = 'number'
                    name= 'inputGoal'
                    value = {currentCals}
                    placeholder='Target Calorie Amount'
                    onChange={handleSetCals}
                ></input>
                <button type='submit'>Enter</button>
            </form> :
            <button onClick={handleButtonSetCals}>Set Cals</button>
            }
            <div>
                <h2>Carbs</h2>
            </div>
            <div>
                <h2>Protein</h2>
            </div>
            
            <div>
                <h2>Fat</h2>
            </div>
            
            
        </div>
    )
}

export default Calories;