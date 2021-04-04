import React, { Component } from 'react'
import axios from 'axios';
import { checkIsUserLoggedIn } from "../lib/helpers"

export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ctArray: [],
            isLoading: false,
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
        });
        console.log(ctData.data.drinks[0]);
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
            <div class="bg-light me-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
      <div class="my-3 p-3">
        <h2 class="display-5">Another headline</h2>
        <p class="lead">And an even wittier subheading.</p>
      </div>
      <div class="bg-dark shadow-sm mx-auto" style={{width: "80", height: 300}></div>
</div>
              <h1>Try Something New</h1>
              <p>Drink Description</p>
              <p><a class="btn btn-lg btn-light" href="/recipe-detail">View The Recipe</a></p>
            </div>
          </div>
        ): (
        <div class="container">
          <div class="carousel-caption text-start">
            <h1>Try Something New</h1>
            <p>Drink Description</p>
            <p><a class="btn btn-lg btn-light" href="/login">Sign up to view recipes</a></p>
          </div>
        </div>
        )}
      </div>
      {/* <div class="carousel-item">
        <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"/></svg>

        <div class="container">
          <div class="carousel-caption">
            <h1>Another example headline.</h1>
            <p>Some representative placeholder content for the second slide of the carousel.</p>
            <p><a class="btn btn-lg btn-primary" href="#">Learn more</a></p>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777"/></svg>

        <div class="container">
          <div class="carousel-caption text-end">
            <h1>One more for good measure.</h1>
            <p>Some representative placeholder content for the third slide of this carousel.</p>
            <p><a class="btn btn-lg btn-primary" href="#">Browse gallery</a></p>
          </div>
        </div> */}
      </div>
    </div>
    {/* <button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button> */}
  <div class="container marketing">


<div class="row">
  <div class="col-lg-4">
    <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

    <h2>Heading</h2>
    <p>Some representative placeholder content for the three columns of text below the carousel. This is the first column.</p>
    <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
  </div>
  <div class="col-lg-4">
    <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

    <h2>Heading</h2>
    <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second column.</p>
    <p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
  </div>
  <div class="col-lg-4">
    <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#777"/><text x="50%" y="50%" fill="#777" dy=".3em">140x140</text></svg>

    <h2>Heading</h2>
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
