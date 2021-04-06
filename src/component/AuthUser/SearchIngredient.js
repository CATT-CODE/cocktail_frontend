import React, { Component } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';

export class SearchIngredient extends Component {
    state = {
        searchIngredientArray: [],
        ingredientInput: "",
        displayInput: "",
        isError: false,
        errorMessage: "",
    };

    // componentDidMount() {
    //     this.setState({
    //         ingredientInput: "",
    //         isError: false,
    //         errorMessage: "",
    //     })
    // }

    handleInputOnChange = (event) => {
        this.setState({
            ingredientInput: event.target.value,
            isError: false,
            errorMessage: "",
        });
    }
    handleChange = () => {
    }

    handleSearchOnClick = async () => {
        this.setState({
            isLoading: true,
        });
        try {
            let payload = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${this.state.ingredientInput}`)
            if ( payload.data === undefined || payload.data.length === 0 ) {
                toast.error(`Cannot find results for '${this.state.ingredientInput}', please try again`, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    delay: 7000
                    });
                return;
            }
            console.log(payload);
            this.setState({
                displayInput: this.state.ingredientInput,
            })
            this.setState({
                searchIngredientArray: payload.data.drinks,
                ingredientInput: "",
                isLoading: false,
                isError: false,
                errorMessage: "",
            })
        } catch (e) {
            console.log(e);
        }
    }

    handleSearchOnEnter = async (event) => {
        if (event.key === "Enter") {
            this.setState({
                isLoading: true,
            });
        }
        try {
            let payload = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${this.state.ingredientInput}`)
            if ( payload.data === undefined || payload.data.length === 0 ) {
                toast.error(`Cannot find results for '${this.state.ingredientInput}', please try again`, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    delay: 7000

                    });
                // this.setState({
                //     isLoading: false,
                //     isError: true,
                //     errorMessage:
                //         `Cannot find results for '${this.state.ingredientInput}', please try again`,
                // });
                return;
            }
            this.setState({
                displayInput: this.state.ingredientInput,
            })
            this.setState({
                searchIngredientArray: payload.data.drinks,
                ingredientInput: "",
                isLoading: false,
                isError: false,
                errorMessage: "",
            })
        } catch (e) {
            console.log(e);
        }
    }

    showSearchArray = () => {
        return this.state.searchIngredientArray.map((item) => {
            return (
                    <div class="col-lg-4" style={{marginTop: 25,}} key={item.idDrink}>
                        <img src={item.strDrinkThumb} alt="something" className="bd-placeholder-img rounded-circle" width="225" height="225" style={{marginBottom: 15}} />
                        <h2 style={{marginBottom: 15}} class="text-light">{item.strDrink}</h2>
                        <p><a class="btn btn-secondary" href={`/recipe-detail/${item.idDrink}`}>View Recipe &raquo;</a></p>
                    </div>
            )
        })
    }

    render() {
        return (
            <div class="container marketing">
                <h1 style={{marginBottom: 20, marginTop:50, }} class="text-muted">Search By <span class="text-light">Ingredient</span></h1>
                <div style={{ marginTop: 32, }}>
                    {this.state.errorMessage.length > 0 && (
                        <span style={{ color: "red" }}>{this.state.errorMessage}</span>
                    )}
                </div>
                <div class="input-group mb-3 center-block" style={{ marginTop: 50, width: 1300, }}>
                    <input type="text" value={this.state.ingredientInput} onChange={this.handleInputOnChange} onKeyPress={this.handleSearchOnEnter} name="ingredientInput" class="form-control" placeholder="Input An Ingredient" required/>
                    <button type="submit" class="btn btn-outline-secondary" onClick={this.handleSearchOnClick} id="ingredientInput">Search</button>
                </div>
                <div style={{marginTop: 25}}>

                { this.state.isLoading ? (
                    <div>...Loading</div>
                ) : (
                    <div>
                        { this.state.searchIngredientArray.length > 0 && (
                            <h2 class="text-muted">Results for '<span>{this.state.displayInput}</span>'</h2>
                        )}
                    <div className="row">
                        {this.showSearchArray()}
                    </div> 
                    </div>
                )}
                </div>
            </div>
        )
    }
}

export default SearchIngredient
