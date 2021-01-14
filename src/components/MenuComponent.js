import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';


class Menu extends Component {

    componentDidMount() {
        console.log('Menu Component componentDidMount is invoked')
    }

    render() {

        console.log('Menu Component render invoked')

        // "map" creates a new array with the results of calling a function for each array element
        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    {/* When this card is clicked, pass dish.id to the onClick function to use in MainComponent.js */}
                    <Card onClick={() => this.props.onClick(dish.id)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
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
}

export default Menu;