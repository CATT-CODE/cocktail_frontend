import React, { Component } from 'react';
import axios from 'axios';
import { checkIsUserLoggedIn } from "../lib/helpers";

export class RandomSelection extends Component {
    state = {
        randomResults: [],
    }
    
    async componentDidMount () {
        try {
            let payload = await axios.get(
                `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail`
            );
            const generateRandom = () => {
                const randomArray = [];
                for (let i = 0; i < 12;) {
                    const random = Math.floor(Math.random() * 100);
                    if(!randomArray.includes(random)){
                        randomArray.push(random);
                        i++;
                    }
                };
                return randomArray;
            }

            let randomIndex = await generateRandom();

            let resultsArray = [];

            await randomIndex.map((item) => {
                return resultsArray.push(payload.data.drinks[`${item}`])
            })

                this.setState({
                    randomResults: resultsArray
                });

            console.log(this.state.randomResults);
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default RandomSelection
