import React, { useState } from 'react';
import FoodList from './FoodList';
import FoodForm from './FoodForm'

export default function FoodContainer() {
    const [foods, setFoods] = useState([]);

    const addFood = (foodName, meal) => {
        const newFood = {
            name : foodName,
            id: Date.now(),
            meal: meal
        }
        setFoods([
            ...foods, newFood
        ])
    }

    console.log(foods)

    return (
        <div>
            <h1>Food Log</h1>
            <h3>Breakfast</h3>
            <FoodList 
                foods={foods}
                meal = 'Breakfast'
            />
            <FoodForm 
                addFood={addFood}
                meal = 'Breakfast'
            />

            <h3>Lunch</h3>
            <FoodList 
                foods={foods}
                meal = 'Lunch'
            />
            <FoodForm 
                addFood={addFood}
                meal = 'Lunch'
            />

            <h3>Dinner</h3>
            <FoodList 
                foods={foods}
                meal = 'Dinner'
            />
            <FoodForm 
                addFood={addFood}
                meal = 'Dinner'
            />

            <h3>Snacks</h3>
            <FoodList 
                foods={foods}
                meal = 'Snacks'
            />
            <FoodForm 
                addFood={addFood}
                meal = 'Snacks'
            />

        </div>
    );
}
