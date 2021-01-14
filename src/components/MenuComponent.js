import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

function RenderMenuItem({ dish, onClick }) {
    return (
        /* When this card is clicked, pass dish.id to the onClick function to use in MainComponent.js */
        <Card onClick={() => onClick(dish.id)}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
                <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
}

// Just to demonstrate that we can use arrow function instead of function()
const Menu = (props) => {
    // "map" creates a new array with the results of calling a function for each array element
    const menu = props.dishes.map((dish) => {
        return (
            <div key={dish.id} className="col-12 col-md-5 m-1">
                <RenderMenuItem dish={dish} onClick={props.onClick} />
            </div>
        );
    });
    return (
        <div className="container">
            <div className="row">
                {menu} 
            </div>
        </div>
    );
}


export default Menu;