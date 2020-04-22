import React, { Component } from 'react';
import "./main.css";
import { Hamburger } from "../../components";
import { MenuList } from '../Menu';

class HamburgerApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            chosenIngredients: [],
            totalOfPrice: 0
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

    addTotalPrice = (price) => this.setState({ totalOfPrice: this.state.totalOfPrice + price });

    subtractToralPrice = (price) => this.setState({ totalOfPrice: this.state.totalOfPrice - price });

    render() {
        const { chosenIngredients, totalOfPrice } = this.state;
        return (
            <div className="container">
                <Hamburger chosenIngredients={chosenIngredients} totalPrice={this.state.totalOfPrice} />
                <MenuList
                    chosenIngredients={chosenIngredients}
                    addIngredient={this.addIngredient}
                    removeIngredient={this.removeIngredient}
                    addTotalPrice={this.addTotalPrice}
                    subtractToralPrice={this.subtractToralPrice}
                    totalOfPrice={totalOfPrice}
                />
            </div>
        );
    }
}

export default HamburgerApp;