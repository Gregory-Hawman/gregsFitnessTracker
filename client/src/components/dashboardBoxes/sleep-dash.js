import React, { useState } from 'react';
import { SleepGraph } from '../circleProgres'
import '../../App.css';

function Sleep() {
    const [sleep, setSleep] = useState({
        sleep : 6.5,
        goal : 8
    })
    
    const [change, setChange] = useState({
        sleep : false,
        goal : false
    })

    const percentage = sleep.sleep/sleep.goal * 100

    const handleSleep = (e) => {
        const { name, value } = e.target
        e.preventDefault()
        setSleep({
            ...sleep,
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

    return (
        <div className='sections'>
            <h1>Sleep</h1>
            <SleepGraph color={'limegreen'} percentage={percentage}/>
            <div>
                {change.sleep ? 
                    <form>
                        <input 
                            type='float'
                            name='sleep'
                            value={sleep.sleep}
                            placeholder='How many hours did you sleep?'
                            onChange= {handleSleep}
                        ></input>
                        <button 
                            type='submit'
                            name='sleep'
                            onClick={handleChange}
                        >
                            Enter
                        </button>
                    </form> : 
                    <button
                        name='sleep'  
                        onClick={handleChange}
                    >
                        Time Slept
                    </button>
                }
                {change.goal ? 
                <form>
                    <input 
                        type='float'
                        name='goal'
                        value= {sleep.goal}
                        placeholder='How many hours to you want to sleep?'
                        onChange= {handleSleep}
                    ></input>
                    <button 
                        type="submit"
                        name='goal'
                        onClick={handleChange}
                    >
                        Sumbit
                    </button>
                </form> : 
                <button
                    name='goal' 
                    onClick={handleChange}
                >
                    Sleep Goal
                </button>
                } 
            </div>
        </div>
    )
}

export default Sleep;