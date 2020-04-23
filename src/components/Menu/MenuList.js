import React from 'react';
import './menu.css';
import ingredientMockData from "../../constants/ingredients";
import ListItem from './ListItem';

const MenuList = ({ chosenIngredients, addIngredient, removeIngredient, totalOfPrice, removeAllIngredients }) => {
    return (
        <>
            <h2>Eklenecek Malzemeler</h2>
            <ul>
                {
                    ingredientMockData.map((ingredient) => {
                        const addedIngredient = chosenIngredients.find((chosen) => chosen.id === ingredient.id);
                        return <ListItem
                            key={ingredient.id}
                            ingredient={ingredient}
                            addIngredient={addIngredient}
                            removeIngredient={removeIngredient}
                            addedIngredient={addedIngredient}
                        />
                    })
                }
                <div style={{ display: "flex" }}>
                    <p className="menu-total-price">Toplam Fiyat: {totalOfPrice}</p>
                    <button onClick={removeAllIngredients}
                        className="menu-delete-all-button">
                        Hepsini Sil
                    </button>
                </div>
            </ul>
        </>
    )
}

export default MenuList;