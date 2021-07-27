import React, { Component } from 'react'
import axios from 'axios';
import CoffeCard from './CoffeCard'

export class Main extends Component {
    constructor(props){
        super(props);
        this.state={
            REACT_APP_BACKEND_URL:process.env.REACT_APP_BACKEND_URL,
            allCoffee:[],
            showStatus:false
        }
    }

    componentDidMount=async(item)=>{
        let allCoffee= await axios.get(`${this.state.REACT_APP_BACKEND_URL}/retreive`)
        this.setState({
            allCoffee:allCoffee.data,
            showStatus:true
        })
    }
    render() {
        return (
            <div>
                {
                    this.state.showStatus && (
                        <CoffeCard allCoffee={this.state.allCoffee}></CoffeCard>
                    )
                }
            </div>
        )
    }
}

export default Main
