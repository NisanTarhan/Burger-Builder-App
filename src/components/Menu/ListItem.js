import React from 'react';
import Buttons from './Buttons';

const ListItem = ({ ingredient, addIngredient, removeIngredient, addTotalPrice, subtractToralPrice, showDecreaseButton }) => {
    return (
        <li>
            <p className="menu-ingredient">{ingredient.price}TL</p>
            <p className="menu-ingredient">{ingredient.name}</p>
            <Buttons
                ingredient={ingredient}
                removeIngredient={removeIngredient}
                addIngredient={addIngredient}
                addTotalPrice={addTotalPrice}
                subtractToralPrice={subtractToralPrice}
                showDecreaseButton={showDecreaseButton} />
        </li>
    )
}

export default ListItem;