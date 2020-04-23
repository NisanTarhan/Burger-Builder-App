import React from 'react';
import Buttons from './Buttons';

const ListItem = ({ ingredient, addIngredient, removeIngredient, addedIngredient }) => {
    return (
        <li>
            <p className="menu-ingredient">{ingredient.price}TL</p>
            <p className="menu-ingredient">{ingredient.name}</p>
            <Buttons
                ingredient={ingredient}
                removeIngredient={removeIngredient}
                addIngredient={addIngredient}
                addedIngredient={addedIngredient}
            />
            <p className="menu-ingredient-count" >ADET: {addedIngredient?.count || 0}</p>
        </li>
    )
}

export default ListItem;