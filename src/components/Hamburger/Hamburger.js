import React from 'react';
import "./styles.css";
import Ingredient from './Ingredient';

const Hamburger = (props) => {
    // Kapsayici icin React fragment kullaniyoruz.
    return (
        <>
            <div className="hamburger">
                <div className="BreadTop" style={{
                    height: "100px"
                }} />
                {
                    props.chosenIngredients.map((chosen) => {
                        const elements = [];
                        for (let i = 0; i < chosen.count; i++) {
                            elements.push(<Ingredient key={Math.random()} ingredient={chosen} />);
                        }
                        return elements;
                    })
                }
                <div className="BreadBottom" style={{
                    height: "50px"
                }} />
            </div>
        </>
    );
};

export default Hamburger;