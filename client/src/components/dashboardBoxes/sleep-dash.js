import React from 'react';
import '../../App.css';

function Sleep() {

    return (
        <div className='sections'>
            <h1>Sleep</h1>
            <svg width='200' height= '200'>
                <g transform='rotate(-90 100 100)'>
                    <circle r='70' cx='100' cy='100' fill='transparent' stroke='lightgrey' stroke-width='.75rem' stroke-dasharray='439.8' stroke-dashoffset='0' />
                    <circle r="70" cx="100" cy="100" fill="transparent" stroke="limegreen" stroke-width=".8rem" stroke-dasharray="439.8" stroke-dashoffset="66"/>
                </g>
                <text x='50%' y='50%' dominantBaseline='central' text-anchor='middle' fill='white'>85%</text>
            </svg>
        </div>
    )
}

export default Sleep;