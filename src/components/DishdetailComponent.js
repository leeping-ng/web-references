import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    componentDidMount() {
        console.log('Dishdetail Component componentDidMount is invoked')
    }

    componentDidUpdate() {
        console.log('Dishdetail Component componentDidUpdate is invoked')
    }

    renderDish(dish) {
        if (dish != null) {
            return (
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                    
                </div>
            );
        }
        else {
            return (<div></div>)
        }
    }

    renderComments(comments) {
        if (comments != null) {
            const dish_comments = comments.map(comment => {
                return (
                    <li key={comment.id}>
                        <p>{comment.comment}</p>
                        <p>-- {comment.author}, 
                            &nbsp;
                            {new Intl.DateTimeFormat('en-US', {
                                day: '2-digit',
                                month: 'short',
                                year: 'numeric'
                            }).format(new Date(Date.parse(comment.date)))}
                        </p>
                    </li>
                );
            });
            return (
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {dish_comments}
                    </ul>
                </div>
            );
        }
        else {
            return (<div></div>)
        }
    }

    render() {

        console.log('Dishdetail Component render invoked')

        const dish = this.props.dish
        if (dish == null) {
            return (
                <div></div>
            );
        }

        return (
            <div className="container">
                <div className="row">
                    {this.renderDish(dish)}
                    {this.renderComments(dish.comments)}
                </div>
            </div>
        );
    }
}

export default DishDetail;