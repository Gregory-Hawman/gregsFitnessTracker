import React, { useState } from 'react';
import '../../App.css';

function Water() {
    const [goal, setGoal] = useState(100)
    const [water, setWater] = useState(0)
    const [cupSize, setCupSize] = useState(8)

    const [change, setChange] = useState({
        goal: false,
        water: false,
        cupSize: false
    })

    function addWater() {
        setWater(water + cupSize)
    }

    function handleGoal(e) {
        e.preventDefault()
        setGoal(parseInt(e.target.value))
    }

    function handleCupSize(e) {
        e.preventDefault()
        setCupSize(parseInt(e.target.value))
    }

    function handleChange(e) {
        const { name } = e.target
            e.preventDefault()
            setChange({
                ...change,
                [name] : !change[name]
            })
    }

    const waterPercentage = 100 - ((water / goal) * 100)

    return (
        <div className='sections'>
            <h1>Water</h1>
            <svg width="100" height="100" viewBox="0 0 40 40">
                <defs>
                    <linearGradient id="half" gradientTransform="rotate(90)">
                        <stop offset={`${waterPercentage}%`}  stopColor="#282c34" />
                        <stop offset={`${waterPercentage}%`} stopColor="blue" />
                    </linearGradient>
                </defs>
                <g fill="none" fillRule="evenodd">
                    <circle cx="20" cy="20" r="20" fill="url('#half')" />
                    <text fill="#FFF" fontFamily="Geomanist-Book" fontSize="27">
                        <tspan x="16.369" y="29.348">1</tspan>
                    </text>
                </g>
            </svg>

            <div onClick={addWater}>+</div>

            <div>
                {change.cupSize ? 
                    <form>
                        <input
                            type='number'
                            name='cupSize'
                            placeholder='How big is your water glass'
                            value={cupSize}
                            onChange={handleCupSize}
                        ></input>
                        <button
                            type='submit'
                            name='cupSize'
                            onClick={handleChange}
                        >
                            Enter
                        </button>
                    </form> : 
                    <button
                        name='cupSize'
                        onClick={handleChange}
                    >
                        Oz Size
                    </button>
                }
            </div>

            <div>
                {change.goal ? 
                    <form>
                        <input
                            type='number'
                            name='goal'
                            placeholder='How much water do you want to drink'
                            value={goal}
                            onChange={handleGoal}
                        ></input>
                        <button
                            type='submit'
                            name='goal'
                            onClick={handleChange}
                        >
                            Enter
                        </button>
                    </form> : 
                    <button
                        name='goal'
                        onClick={handleChange}
                    >
                        Water Oz Goal
                    </button>
                }
            </div>
            
            <div>
                <div>
                    <h3>Water Drank</h3>
                    <p>{water} oz</p>
                </div>
                <div>
                    <h3>Water Goal</h3>
                    <p>{goal} oz</p>
                </div>
            </div>
        </div>
    )
}

export default Water;