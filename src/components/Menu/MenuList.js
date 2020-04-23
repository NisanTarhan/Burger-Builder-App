import React from 'react';
import './menu.css';
import ingredientMockData from "../../constants/ingredients";
import ListItem from './ListItem';

const MenuList = ({ chosenIngredients, addIngredient, removeIngredient, sumPrice }) => {
    return (
        <>
            <h2>Eklenecek Malzemeler</h2>
            <ul>
                {
                    ingredientMockData.map((ingredient) => {
                        const showDecreaseButton = chosenIngredients.find((chosen) => chosen.id === ingredient.id)
                        return <ListItem
                            key={ingredient.id}
                            ingredient={ingredient}
                            chosenIngredients={chosenIngredients}
                            addIngredient={addIngredient}
                            removeIngredient={removeIngredient}
                            showDecreaseButton={showDecreaseButton}
                        />
                    })
                }
                <p className="total-price">Toplam Fiyat: {sumPrice}</p>
            </ul>
        </>

    )
}

export default MenuList;