import React, { Component } from 'react'
import RecipeService from '../services/RecipeService'

class ListRecipeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                recipes: []
        }
        this.addRecipe = this.addRecipe.bind(this);
        this.editRecipe = this.editRecipe.bind(this);
        this.deleteRecipe = this.deleteRecipe.bind(this);
    }

    deleteRecipe(id){
        RecipeService.deleteRecipe(id).then( res => {
            this.setState({recipes: this.state.recipes.filter(recipe => recipe.id !== id)});
        });
    }
    viewRecipe(id){
        this.props.history.push(`/view-recipe/${id}`);
    }
    editRecipe(id){
        this.props.history.push(`/add-recipe/${id}`);
    }

    componentDidMount(){
        RecipeService.getRecipes().then((res) => {
            this.setState({ recipes: res.data});
        });
    }

    addRecipe(){
        this.props.history.push('/add-recipe/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Cookbook</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addRecipe}> Add Recipe</button>
                 </div>
                 <br></br>
                 <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Recipe Name</th>
                                    <th> Description</th>
                                    <th> Favourite</th>
                                    <th> Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.recipes.map(
                                        recipe => 
                                        <tr key = {recipe.id}>
                                             <td> {recipe.name} </td>   
                                             <td> {recipe.description}</td>
                                             <td> {String(recipe.favourite)}</td>
                                             <td>
                                                 <button onClick={ () => this.editRecipe(recipe.id)} className="btn btn-info">Update </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.deleteRecipe(recipe.id)} className="btn btn-danger">Delete </button>
                                                 <button style={{marginLeft: "10px"}} onClick={ () => this.viewRecipe(recipe.id)} className="btn btn-info">View </button>
                                             </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>

                 </div>

            </div>
        )
    }
}

export default ListRecipeComponent