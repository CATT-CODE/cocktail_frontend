import React, { Component } from 'react'
import axios from "axios";
import './AuthCTDetail.css'

export class AuthCTDetail extends Component {
    
    state = {
        ingredientsArray: [],
        measurementsArray: [],
        ctInstructions: "",
        ctCategory: "",
        ctData: []
    }

    componentDidMount = async () => {
        try {
            let payload = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${this.props.match.params.id}`);
            this.setState({
                ctData: payload.data.drinks[0],
            })
            let rawIngredients = Object.values(this.state.ctData);
            let rawIngredients2 = rawIngredients.slice(17, 32);
            let finalIngredients = rawIngredients2.map(item => !item === null);
            let rawMeasurements = Object.values(this.state.ctData);
            let rawMeasurements2 = rawMeasurements.slice(32, 47);
            let finalMeasurements = rawMeasurements2.map(item => !item === null);
            this.setState({
                ingredientsArray: rawIngredients2,
                measurementsArray: rawMeasurements2,
                ctInstructions: this.state.ctData.strInstructions,
                ctCategory: this.state.ctData.strCategory,
            })
            console.log(this.state);
            // console.log(this.state.ctData.slice(17, 32))
            // console.log(this.state.ctData.slice(32, 47))
        } catch (e) {
            console.log(e);
        }
    }

    showIngredientList = () => {
        
    }

    render() {
        return (
<body class="featurette-divider">
    <div class="row featurette">
      <div class="col-md-7">
        <h2 class="featurette-heading">First featurette heading. <span class="text-muted">It’ll blow your mind.</span></h2>
        <p class="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here.</p>
      </div>
      <div class="col-md-5">
        <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg>

      </div>
    </div>
    </body>
        )
    }
}

export default AuthCTDetail
