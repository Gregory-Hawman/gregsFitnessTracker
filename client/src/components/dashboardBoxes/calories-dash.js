import React, { useState } from 'react';
import Macros from './marcos-dash';
import '../../App.css';

function Calories() {
    const [cals, setCals] = useState({
        cals : 1111, 
        goal : 2000
    })
    const [change, setChange] = useState({
        cals : false, 
        goal : false
    })

    const handleCals = (e) => {
        const { name, value } = e.target
            e.preventDefault()
            setCals({
                ...cals,
                [name] : value
            })
    }
    const handleChange = (e) => {
        const { name } = e.target
            e.preventDefault()
            setChange({
                ...change,
                [name] : !change[name]
            })
    }

    // console.log(change.cals)
    // console.log(change.goal)

    const fillerPercent = (unit, goal) => {
        return (unit/goal) * 100
    }

    return (
        <div className='sections'>
            <h1>Calories/ Marcos</h1>
            <div className='caloriesBar'>
                <div className='progress-wrapper'>
                    <div className='progress-filler' style={{ width: `${fillerPercent(cals.cals, cals.goal)}%` }}>{cals.cals} / {cals.goal}</div>
                </div>
            </div>

            {change.cals ?
            <form>
                <input
                    type ='number'
                    name='cals'
                    value={cals.cals}
                    placeholder='Calories Eaten'
                    onChange={handleCals}
                ></input>
                <button 
                    type='submit' 
                    name='cals' 
                    value={change.cals}
                    onClick={handleChange}
                >
                    Enter
                </button>
            </form> :
            <button 
                name='cals'
                value={change.cals}
                onClick={handleChange}
            >
                Cals
            </button>
            }

            {change.goal ?
            <form>
                <input
                    type='number'
                    name='goal'
                    value={cals.goal}
                    placeholder='Target Calorie Amount'
                    onChange={handleCals}
                ></input>
                <button 
                    type='submit' 
                    name='goal' 
                    value={change.goal}
                    onClick={handleChange}
                >
                    Enter
                </button>
            </form> :
            <button 
                name='goal'
                value={change.goal}
                onClick={handleChange}
            >
                Cals Goal
            </button>
            }
            
            <Macros />
        </div>
    )
}

export default Calories;