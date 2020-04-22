import React from 'react';

const Ingredient = ({ ingredient }) => {
    const container = styles.ingredient(ingredient);
    return (
        <div key={ingredient.id}
            style={container}
        >
            {ingredient.name}
        </div>
    )
}

const styles = {
    ingredient: (ingredient) => ({
        height: "20px",
        backgroundColor: ingredient.color,
        width: "30%",
        margin: "0 auto",
        marginTop: "5px",
        borderRadius: "20px"
    })
}

export default Ingredient;