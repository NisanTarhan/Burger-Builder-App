import React from 'react';
import Buttons from './Buttons';

const ListItem = ({ ingredient, chosenIngredients, addIngredient, removeIngredient, showDecreaseButton, getCountOfIngredient }) => {

    return (
        <li>
            <p className="menu-ingredient">{ingredient.price}TL</p>
            <p className="menu-ingredient">{ingredient.name}</p>
            <Buttons
                ingredient={ingredient}
                removeIngredient={removeIngredient}
                addIngredient={addIngredient}
                showDecreaseButton={showDecreaseButton}
            />
            <p></p>
        </li>
    )
}

export default ListItem;