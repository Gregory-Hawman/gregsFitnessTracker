import React, { useState } from 'react';


export default function FoodForm(props) {
    const [foodInfo, setFoodInfo] = useState({
        name: ''
    })
    const [clicked, setClicked] = useState(false)

    const handleClicked = e => {
        e.preventDefault();
        setClicked(!clicked)
    }

    const handleChange = e => {
        setFoodInfo({
            name: e.target.value
        })
    }

    const handleSumbit = e => {
        e.preventDefault()
        props.addFood(foodInfo.name, props.meal)
        setFoodInfo({
            name: ''
        })
    }

    return (
        <div>
            {clicked ? 
                <form onSubmit={handleSumbit}>
                    <input 
                        type='text'
                        name='food'
                        placeholder='What did you eat?'
                        value={foodInfo.name}
                        onChange={handleChange}
                    />
                    <button> Add {props.meal}</button>
                    <button onClick={handleClicked}> Done</button>
                </form> :
                <button onClick={handleClicked}> Add {props.meal}</button>
            }
        </div>
    );
}
