import React from 'react';
// import Navbar from './navbar';
import FoodLog from './food/FoodContainer';
import Calories from './dashboardBoxes/calories-dash';
import Water from './dashboardBoxes/water-dash';
import Fasting from './dashboardBoxes/fasting-dash';
import Weight from './dashboardBoxes/weight-dash';
import Steps from './dashboardBoxes/steps-dash';
import Exercise from './dashboardBoxes/exercise-dash';
import Sleep from './dashboardBoxes/sleep-dash';
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
                <Fasting />
            </div>
            <div className='row2'>
                <Weight />
                <Steps />
                <Exercise />
                <Sleep />
            </div>
        </div>
    )
}

export default Dashboard;