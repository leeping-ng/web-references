import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';

class Main extends Component {
	constructor(props) {
    	super(props);

    	this.state = {
      		dishes: DISHES,
      		selectedDish: null
    	};
  	}

  	onDishSelect(dishId) {
    	this.setState({ selectedDish: dishId});
  	}

  	render() {
    	return (
      		<div>
        		<Navbar dark color="primary">
          			<div className="container">
            			<NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          			</div>
        		</Navbar>
				<Menu dishes={this.state.dishes}
					// Takes in dish.id from clicked card in MenuComponent.js and calls onDishSelect function 
            		onClick={(dishId) => this.onDishSelect(dishId)}/>
				<DishDetail 
					// "Filter" creates an array filled with all array elements (dish) that pass a test
            		dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
      		</div>
    	);
  	}
}

export default Main;
