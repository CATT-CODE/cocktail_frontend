import React, { Component } from 'react'
import axios from "axios";
import './AuthCTDetail.css'

export class AuthCTDetail extends Component {
    
    state = {
        ctData: [],
        ingredientsArray: [],
        measurementsArray: [],
        ctInstructions: "",
        ctCategory: "",
        ctName: "",
        ctAlcohol: "",
        ctGlass: "",
        ctImg: "",
    };

    componentDidMount = async () => {
        try {
            let payload = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${this.props.match.params.id}`);
            this.setState({
                ctData: payload.data.drinks[0],
            });
            let rawIngredients = Object.values(this.state.ctData);
            let rawIngredients2 = rawIngredients.slice(17, 32);
            let finalIngredients = rawIngredients2.filter(item => item !== null);
            let rawMeasurements = Object.values(this.state.ctData);
            let rawMeasurements2 = rawMeasurements.slice(32, 47);
            let finalMeasurements = rawMeasurements2.filter(item => item !== null);
            this.setState({
                ingredientsArray: finalIngredients,
                measurementsArray: finalMeasurements,
                ctInstructions: this.state.ctData.strInstructions,
                ctCategory: this.state.ctData.strCategory,
                ctName: this.state.ctData.strDrink,
                ctAlcohol: this.state.ctData.strAlcoholic,
                ctGlass: this.state.ctData.strGlass,
                ctImg: this.state.ctData.strDrinkThumb,
            });
        } catch (e) {
            console.log(e);
        }
    }

    getMeasurementsList = () => {
        return this.state.measurementsArray.map((item, index) => {
            return (
                <tr key={index}>
                    <td>{item}</td>
                </tr>
            )
        })
    };
    getIngredientsList = () => {
        return this.state.ingredientsArray.map((item, index) => {
            return (
                <tr key={index}>
                    <td>{item}</td>
                </tr>
            )
        })
    };

    render() {
        return (
            <body class="featurette-divider">
                <div class="row featurette">
                    <div class="col-md-7">
                    <h2 class="featurette-heading">{this.state.ctName} <span class="text-muted">Recipe</span></h2>
                        <br/>
                    <p class="lead">{this.state.ctCategory}, {this.state.ctAlcohol}</p>
                    <p class="lead">Glass Type, {this.state.ctGlass}</p>
                        <table class="table table-sm">
                            <thead>
                                <tr>
                                <th scope="col">Ingredients</th>
                                <th scope="col">Measurements</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{this.getIngredientsList()}</td>
                                    <td>{this.getMeasurementsList()}</td>
                                </tr>
                            </tbody>
                        </table>
                            <br/>
                        <span class="lead">{this.state.ctInstructions}</span>
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
