import React, { useState } from 'react';
import '../../App.css';

function Water() {
    const [goal, setGoal] = useState(100)
    const [water, setWater] = useState(0)
    const [cupSize, setCupSize] = useState(8)

    function handleCupSize() {
        setCupSize()
    }

    return (
        <div className='sections'>
            <h1>Water</h1>
            
        </div>
    )
}

export default Water;