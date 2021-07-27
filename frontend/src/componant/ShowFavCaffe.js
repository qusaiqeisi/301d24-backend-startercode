import React, { Component } from 'react'
import CoffeFavCard from './CoffeFavCard'
import axios from 'axios';

export class ShowFavCaffe extends Component {
    constructor(props){
        super(props);
        this.state={
            REACT_APP_BACKEND_URL:process.env.REACT_APP_BACKEND_URL,
            allFavCoffee:[],
            showStatus:false
        }
    }

    componentDidMount=async(item)=>{
        let allFavCoffee= await axios.get(`${this.state.REACT_APP_BACKEND_URL}/fav-list`)
        this.setState({
            allFavCoffee:allFavCoffee.data,
            showStatus:true
        })
    }
    render() {
        return (
            <div>
                {
                    this.state.showStatus && (
                        <CoffeFavCard allFavCoffee={this.state.allFavCoffee}></CoffeFavCard>
                    )
                }
            </div>
        )
    }
}

export default ShowFavCaffe
