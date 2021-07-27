import axios from 'axios';
import React, { Component } from 'react'
import { Card,Button } from 'react-bootstrap';

export class CoffeCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            REACT_APP_BACKEND_URL: process.env.REACT_APP_BACKEND_URL
        }
    }

    addFavCoffe = async (item) => {
        let favCaffe = item;
        await axios.post(`${this.state.REACT_APP_BACKEND_URL}/create`, favCaffe)
    }

    render() {
        return (
            <div>
                {
                    this.props.allCoffee.map((item, index) => {
                        return (
                            <Card key={index} style={{ width: '18rem' ,display:'inline-block'}}>
                                <Card.Img variant="top" src={item.image_url} />
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text>
                                      {item.ingredients}
                                    </Card.Text>
                                    <Button variant="primary" onClick={()=>{this.addFavCoffe(item)}}>addFav</Button>
                                </Card.Body>
                            </Card>
                        )
                    })
                }
            </div>
        )
    }
}

export default CoffeCard
