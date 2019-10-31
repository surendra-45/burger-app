import React from 'react'
import './Burger.css'
import BurgerIngredient from './BurgerIngrediant/BurgerIngrediant';
const burger = (props) => {
    let transformeIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            console.log(igKey)
            return [...Array(props.ingredients[igKey])].map((_, i)=>{
               return <BurgerIngredient key={igKey +i} type={igKey} />
            });
        })
        .reduce((arr, el)=>{
            return arr.concat(el)
        }, []);
    if (transformeIngredients.length ===0) {
        transformeIngredients = <p>Please start adding ingredients</p>
    }
    console.log(transformeIngredients)
    return (
        <div className="Burger">
            <BurgerIngredient type="bread-top" />
            {transformeIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    )
}

export default burger;
