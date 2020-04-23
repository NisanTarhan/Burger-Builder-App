import React from 'react';
import classnames from "classnames";

const Buttons = ({ ingredient, addIngredient, removeIngredient, addedIngredient }) => {
    return (
        <div>
            <button onClick={() => {
                addIngredient(ingredient);
            }}
                className="ingredient-add">
                Ekle
            </button>

            <button onClick={() => {
                removeIngredient(ingredient);
            }}
                className={classnames({
                    "ingredient-remove": true,
                    "disabled": !addedIngredient,
                    "enabled": addedIngredient
                })}>
                Azalt
                </button>
        </div>
    )
}

export default Buttons;