import React, { Component } from 'react'
import RecipeService from '../services/RecipeService'

class ViewRecipeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            recipe: {}
        }
    }

    componentDidMount(){
        RecipeService.getRecipeById(this.state.id).then( res => {
            this.setState({recipe: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Recipes</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Recipe Name: </label>
                            <div> { this.state.recipe.name }</div>
                        </div>
                        <div className = "row">
                            <label> Recipe Description: </label>
                            <div> { this.state.recipe.description }</div>
                        </div>
                        <div className = "row">
                            <label> Recipe Favourite: </label>
                            <div> { this.state.recipe.favourite }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewRecipeComponent