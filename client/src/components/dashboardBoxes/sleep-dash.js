import React, { useState } from 'react';
import Graph from '../circleProgres'
import '../../App.css';

function Sleep() {
    const [sleepAmount, setSleepAmount] = useState(0)
    const [settingSleepAmount, setSettingSleepAmount] = useState(false)
    
    const [sleepGoal, setSleepGoal] = useState(8)
    const [settingGoal, setSettingGoal] = useState(false)

    const percentage = sleepAmount/sleepGoal * 100

    function setGoal() {
        setSettingGoal(!settingGoal)
    }

    function sleepGoalInput(e) {
        e.preventDefault();
        setSleepGoal(e.target.value)
    }

    function setSleep() {
        setSettingSleepAmount(!settingSleepAmount)
    }
    function sleepAmountInput(e) {
        e.preventDefault();
        setSleepAmount(e.target.value)
    }

    return (
        <div className='sections'>
            <h1>Sleep</h1>
            <Graph color={'limegreen'} percentage={percentage}/>
            <div>
                {settingSleepAmount ? 
                    <form onSubmit={setSleep}>
                        <input 
                            type='float'
                            name='sleepAmountInput'
                            value={sleepAmount}
                            placeholder='How many hours did you sleep?'
                            onChange= {sleepAmountInput}
                        ></input>
                        <button type="submit">Sumbit</button>
                    </form> : 
                    <button onClick={setSleep}>Time Slept</button>
                }
                {settingGoal ? 
                <form onSubmit={setGoal}>
                    <input 
                        type='fkl'
                        name='sleepGoalInput'
                        value= {sleepGoal}
                        placeholder='How many hours to you want to sleep?'
                        onChange= {sleepGoalInput}
                    ></input>
                    <button type="submit">Sumbit</button>
                </form> : 
                <button onClick={setGoal}>Sleep Goal</button>
                } 
            </div>
        </div>
    )
}

export default Sleep;