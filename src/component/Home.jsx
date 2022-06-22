import React from 'react';
import "../App.css";
import InputPizza from './InputPizza';
import pizzaImage from './pizza.jpg';

export default function Home (){
    return (
        <>
        <div className="container">
            <div className="container-image">
                <img src={pizzaImage} alt="pizza Image" className="src" />
                <h1>Pizza Calculator App</h1>
            </div>
            <InputPizza/>
        </div>
        </>
    )
}