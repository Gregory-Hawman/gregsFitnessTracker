import React, { useEffect, useState } from 'react';
import { FastingGraph } from '../circleProgres'
import '../../App.css';

function Fasting() {
    // const [startTime, setStartTime] = useState(19)
    // const [fastTime, setFastTime] = useState(16)
    // const [fastActive, setFastActive] = useState(false)
    // const [eatActive, setEatActive] = useState(false)

    // const [totalSecs, setTotalSecs] = useState(0)
    
    const [seconds, setSeconds] = useState(0)
    const [mins, setMins] = useState(0)
    const [hours, setHours] = useState(0)
    const [days, setDays] = useState(0)
    const [isActive, setIsActive] = useState(false)

    function toggleActive() {
        setIsActive(!isActive);
    };

    function resetTimer() {
        setSeconds(0);
        setMins(0);
        setHours(15);
        setDays(0);
        setIsActive(false);
    };

    useEffect(() => {
        let interval = null;
        
        if (isActive) {
            interval = setInterval(() => {
                if(hours === 24){
                    setDays(days + 1)
                    setHours(0)
                    setMins(0)
                    setSeconds(0)
                }
                if(mins === 60) {
                    setHours(hours + 1)
                    setMins(0)
                    setSeconds(0)
                }
                if(seconds === 60){
                    setMins(mins + 1)
                    setSeconds(0)
                } else {
                    setSeconds(seconds + 1)
                };
            }, 1);
        } else if (!isActive && seconds > 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval)
    }, [isActive, seconds, mins, hours, days])

    //trigger points
    // let currSecs = ((days*24 + hours)*60 + mins)*60 + seconds
    // let currFastTime = ((days*24 + hours)*60 + mins)*60 + seconds
    // let currEatTime =((days*24 + hours)*60 + mins)*60 + seconds

    //constants
    // let totalDaySecs =24*60*60
    // let fastGoalSecs = fastTime * 60 * 60
    // let eatGoalSecs = totalDaySecs - fastGoalSecs





    // let fastPercentage = (currSecs/totalDaySecs) * 100
    // let eatPercentage = (currEatTime)

    // if(currFastTime === fastGoalSecs) {
    //     let doneFasting = currFastTime
    //     currFastTime = doneFasting
    // }

    // console.log(fastingGoalSecs)
    // console.log(currFastTime)

    // console.log(fastPercentage, '%')

    //count up to fastTime in hours
    //once fasting timer reaches 0 

    //count up timer
    // start at 0 count up
    // if secs % 60 === 0 reset secs to 0 and add 1 to mins
    // same for mins to hours
    // if hours % 24 === 0 reset to 0 and add 1 to days 


    return (
        <div className='sections'>
            <h1>Intermittent Fasting</h1>
            <FastingGraph color1='limegreen' color2='blue' percentage1='0' percentage2='0'/>
            {/* <div>{ time.days === 0 ? null : `${time.days}` } {Math.floor(Math.floor(seconds / 60) / 60)} {Math.floor(seconds / 60)} {seconds}</div> */}
            <div>{days}:{hours}:{mins}:{seconds}</div>
            <button onClick={toggleActive}>
                {isActive ? 'Pause' : 'Start'}
            </button>
            <button onClick={resetTimer}>
                Reset
            </button>
        </div>
    )
}

export default Fasting;