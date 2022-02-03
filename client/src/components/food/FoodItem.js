import React from 'react';

export default function FoodItem(props) {
  return (
    <div>
        <p>{props.food.name}</p>
    </div>
  );
}
