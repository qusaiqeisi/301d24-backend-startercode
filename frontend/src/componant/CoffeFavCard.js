import axios from 'axios';
import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'
import UpdateForm from './UpdateForm'

export class CoffeFavCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            REACT_APP_BACKEND_URL: process.env.REACT_APP_BACKEND_URL,
            allFavCoffee: this.props.allFavCoffee,
            id: '',
            title: '',
            description: '',
            ingredients: '',
            image_url: '',
            showstatus: false

        }
    }

    // .....................delete function 
    deleteCoffe = async (item) => {
        let id = item._id;
        let dataAfterDelete = await axios.delete(`${this.state.REACT_APP_BACKEND_URL}/delete/${id}`)
        this.setState({
            allFavCoffee: dataAfterDelete.data
        })
    }

    // ...................... show form to change 
    showForm = (item) => {
        this.setState({
            id: item._id,
            title: item.title,
            ingredients: item.ingredients,
            image_url: item.image_url,
            showstatus: true
        })
    }
    // o.........  on change name function

    onChangeName = (e) => {
        this.setState({
            title:e.target.value
        })
    }
    // ......................ingredients
    onChangeIng = (e) => {
        this.setState({
            ingredients: e.target.value
        })
    }

    // ....................update function 
    updateDataForm = async (e) => {
        e.preventDefault();
        let updatData = {
            title: this.state.title,
            ingredients: this.state.ingredients
        }

        let updateFormData = await axios.put(`${this.state.REACT_APP_BACKEND_URL}/update/${this.state.id}`, updatData)

        this.setState({
            allFavCoffee: updateFormData.data,
            showstatus: false

        })
    }

    render() {
        return (
            <div>
                {
                    this.state.showstatus && (
                        <UpdateForm
                            updateDataForm={this.updateDataForm}
                            onChangeIng={this.onChangeIng}
                            onChangeName={this.onChangeName}
                            title={this.state.title}
                            ingredients={this.state.ingredients}
                        ></UpdateForm>
                    )
                }
                {
                    this.props.allFavCoffee.map((item, index) => {
                        return (
                            <Card key={index} style={{ width: '18rem', display: 'inline-block' }}>
                                <Card.Img variant="top" src={item.image_url} />
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text>
                                        {item.ingredients}
                                    </Card.Text>
                                    <Button variant="primary" style={{backgroundColor: '#f44336'}} onClick={() => { this.deleteCoffe(item) }}>Delete</Button>
                                    <Button variant="primary" onClick={() => { this.showForm(item) }}>Update</Button>
                                </Card.Body>
                            </Card>
                        )
                    })
                }
            </div>
        )
    }
}

export default CoffeFavCard
