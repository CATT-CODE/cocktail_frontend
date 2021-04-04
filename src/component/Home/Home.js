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
                });
            } catch (e) {
                console.log(e);
            }
        }
    
    render() {
        return (
            <main>
                <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
    {/* <div class="carousel-indicators">
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div> */}
    <div class="carousel-inner">
      <div class="carousel-item active">
        <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"/></svg>
        {checkIsUserLoggedIn() ? (
            <div class="container">
            <div class="carousel-caption text-start">
              <h1>{this.state.ctName}</h1>
              <p>{this.state.ctDescription}</p>
              <p><a class="btn btn-lg btn-light" href={`/recipe-detail/${this.state.ctID}`}>View The Recipe</a></p>
            </div>
          </div>
        ) : (
        <div class="container">
          <div class="carousel-caption text-start">
            <h1>Try Something New</h1>
            <p>Drink Description</p>
            <p><a class="btn btn-lg btn-light" href="/sign-up">Sign Up To View Recipes</a></p>
          </div>
        </div>
        )}
      </div>
      </div>
    </div>
    
  <div class="container marketing">
<div class="row">
  <div class="col-lg-4">
  <img src={nameImg} alt="something" className="bd-placeholder-img rounded-circle" width="225" height="225"/>

    <h2>Search By Drink Name</h2>
    <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
    <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
  </div>
  <div class="col-lg-4">
    <img src={ingredientsImg} alt="something" className="bd-placeholder-img rounded-circle" width="225" height="225"/>
    <h2>Search By Ingredient</h2>
    <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
    <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
  </div>
  <div class="col-lg-4">
  <img src={randomImg} alt="something" className="bd-placeholder-img rounded-circle" width="225" height="225"/>

    <h2>Random Selection</h2>
    <p>And lastly this, the third column of representative placeholder content.</p>
    <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
  </div> 
  </div>
  </div>

            </main>
        )
    }
}

export default Home;
