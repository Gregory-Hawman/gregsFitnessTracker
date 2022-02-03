import React from 'react';
import FoodItem from './FoodItem'

export default function FoodList(props) {
    let mealSpecificList = props.foods.filter(food => food.meal === props.meal)

    return (
        <div>
            {mealSpecificList.map(food => (
                <FoodItem 
                    key={food.id}
                    food={food}
                />
            ))}
        </div>
    );
}
