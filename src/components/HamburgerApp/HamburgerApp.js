import React, { Component } from 'react';
import "./main.css";
import { Hamburger } from "../../components";
import { MenuList } from '../Menu';

class HamburgerApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chosenIngredients: [],
        }
    }

    addIngredient = (ingredient) => {
        const isThereIngredient = this.state.chosenIngredients.find((chosen) => chosen.id === ingredient.id);
        if (isThereIngredient) {
            this.setState({
                chosenIngredients: this.state.chosenIngredients.map((chosen) => {
                    if (chosen.id === ingredient.id) {
                        return { ...chosen, count: chosen.count + 1 }
                    } else {
                        return chosen;
                    }
                })
            })
        } else {
            this.setState({
                chosenIngredients: [...this.state.chosenIngredients, { ...ingredient, count: 1 }]
            })
        }
    }

    removeIngredient = (ingredient) => {
        const chosenIngredient = this.state.chosenIngredients.find((chosen) => chosen.id === ingredient.id);
        const chosenIngredientCount = chosenIngredient.count;

        if (chosenIngredientCount > 1) {
            this.setState({
                chosenIngredients: this.state.chosenIngredients.map((chosen) => {
                    if (chosen.id === ingredient.id) {
                        return { ...chosen, count: chosen.count - 1 }
                    }
                    return chosen;
                })
            })
        } else {
            this.setState({
                chosenIngredients: this.state.chosenIngredients.filter((chosen) => {
                    return chosen.id !== ingredient.id
                })
            })
        }
    }

    sumPrice = () => {
        return this.state.chosenIngredients.reduce((acc, curr) => {
            return acc + curr.price * curr.count;
        }, 0)
    }

    render() {
        const { chosenIngredients } = this.state;
        return (
            <div className="container">
                <Hamburger chosenIngredients={chosenIngredients} totalPrice={this.state.totalOfPrice} />
                <MenuList
                    chosenIngredients={chosenIngredients}
                    addIngredient={this.addIngredient}
                    removeIngredient={this.removeIngredient}
                    sumPrice={this.sumPrice()}
                />
            </div>
        );
    }
}

export default HamburgerApp;