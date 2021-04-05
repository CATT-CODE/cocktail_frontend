import React, { Component } from 'react';
import axios from 'axios';
import { checkIsUserLoggedIn } from "../lib/helpers";
import "./Home.css";
import randomImg from "../../images/random.png";
import nameImg from "../../images/name.jpg";
import ingredientsImg from "../../images/ingredients.jpg";

export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ctArray: [],
            isLoading: false,
            ctName: "",
            ctDescription: "",
            ctID: "",
            ctImg: ""
        };
    }
    
    async componentDidMount() {
        this.setState({
            isLoading: true,
        });
        try {
            let ctData = await axios.get(
                `https://www.thecocktaildb.com/api/json/v1/1/random.php`,
                );
                this.setState({
                    ctArray: ctData.data.drinks[0],
                    isLoading: false,
                    ctName: ctData.data.drinks[0].strDrink,
                    ctDescription: ctData.data.drinks[0].strCategory,
                    ctID: Number(ctData.data.drinks[0].idDrink),
                    ctImg: ctData.data.drinks[0].strDrinkThumb,
                });
            } catch (e) {
                console.log(e);
            }
        }
    
    render() {
        return (
            <main>
                <div class="carousel slide" data-bs-ride="carousel">
                <div id="my-carousel-bg" class="carousel-inner">
                <div class="carousel-item active">
                {/* <img className="thumbnail" id="ctMainImg" src={this.state.ctImg} alt="something"/>  */}
                <div>
                <img src={this.state.ctImg} alt="LAME" style={{width:400, marginLeft: 1215, marginTop: 55}}/> 
                </div>
                {checkIsUserLoggedIn() ? (
                <div class="container">
                <div class="carousel-caption text-start">
                    <h1>{this.state.ctName}</h1>
                    <p>{this.state.ctDescription}</p>
                    <p><a class="btn btn-lg btn-light" href={`/recipe-detail/${this.state.ctID}`} >View The Recipe</a></p>
                </div>
                </div>
            ) : (
                <div class="container">
                <div class="carousel-caption text-start">
                    <h1>{this.state.ctName}</h1>
                    <p>{this.state.ctDescription}</p>
                    <p><a class="btn btn-lg btn-light" href="/sign-up" >Sign Up To View Recipes</a></p>
                </div>
                </div>
            )}
                </div>
                </div>
                </div>
                <div class="container marketing">
                <div class="row">
                <div class="col-lg-4">
                    <img src={nameImg} alt="something" className="bd-placeholder-img rounded-circle" width="225" height="225" style={{marginBottom: 15}}/>
                    <h2 style={{marginBottom: 15}}>Search By Drink Name</h2>
                    <p><a class="btn btn-secondary" href="/search-drink-name" >View details &raquo;</a></p>
                </div>
                <div class="col-lg-4">
                    <img src={ingredientsImg} alt="something" className="bd-placeholder-img rounded-circle" width="225" height="225" style={{marginBottom: 15}}/>
                    <h2 style={{marginBottom: 15}}>Search By Ingredient</h2>
                    <p><a class="btn btn-secondary" href="/search-ingredient" style={{marginBottom: 15}}>View details &raquo;</a></p>
                </div>
                <div class="col-lg-4">
                    <img src={randomImg} alt="something" href="/random-selection" className="bd-placeholder-img rounded-circle" width="225" height="225" style={{marginBottom: 15}}/>
                    <h2 style={{marginBottom: 15}}>Random Selection</h2>
                    <p><a class="btn btn-secondary" href="/random-selection">View details &raquo;</a></p>
                </div> 
                </div>
                </div>
            </main>
        )
    }
}

export default Home;
