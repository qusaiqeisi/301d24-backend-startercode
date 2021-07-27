import React, { Component } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'

export class UpdateForm extends Component {
    render() {
        return (
            <div>
                <Modal show={true} >
                    <Modal.Header >
                        <Modal.Title>Update Coffe</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={(e) => { this.props.updateDataForm(e) }}>

                            <Form.Label for='fname'>Titel</Form.Label>
                            <Form.Control type="text" value={this.props.title} onChange={(e) => { this.props.onChangeName(e) }} />

                            <Form.Label for='lname'>Titel</Form.Label>
                            <Form.Control type="text" value={this.props.ingredients} onChange={(e) => { this.props.onChangeIng(e) }} />

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}

export default UpdateForm
