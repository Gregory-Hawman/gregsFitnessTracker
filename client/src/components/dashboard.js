import React from 'react';
// import Navbar from './navbar';
import FoodLog from './foodLog';
import Calories from './calories';
import Water from './water';
import Steps from './steps';
import Exercise from './exercise';
import Sleep from './sleep';
import '../App.css';

function Dashboard() {
    const current = new Date()
    const months = {
        0: 'January',
        1: 'February',
        2: 'March',
        3: 'April',
        4: 'May', 
        5: 'June',
        6: 'July', 
        7: 'August',
        8: 'September', 
        9: 'October', 
        10: 'November',
        11: 'December'
    }
    const month = months[current.getMonth()]
    const date = `${month} ${current.getDate()} ${current.getFullYear()}`;

    return (
        <div className='dashboard'>
            <div>{date}</div>
            <div className='row1'>
                <FoodLog />
                <Calories />
                <Water />
            </div>
            <div className='row2'>
                <Steps />
                <Exercise />
                <Sleep />
            </div>
        </div>
    )
}

export default Dashboard;