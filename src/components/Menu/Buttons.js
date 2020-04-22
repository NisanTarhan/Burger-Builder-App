import React from 'react';
import classnames from "classnames";

const Buttons = ({ ingredient, addIngredient, removeIngredient, addTotalPrice, subtractToralPrice, showDecreaseButton }) => {
    return (
        <div>
            <button onClick={() => {
                addIngredient(ingredient);
                addTotalPrice(ingredient.price);
            }}
                className="ingredient-add">
                Ekle
            </button>

            <button onClick={() => {
                removeIngredient(ingredient);
                subtractToralPrice(ingredient.price);
            }}
                className={classnames({
                    "ingredient-remove": true,
                    "disabled": !showDecreaseButton,
                    "enabled": showDecreaseButton
                })}>
                Azalt
                </button>
        </div>
    )
}

export default Buttons;