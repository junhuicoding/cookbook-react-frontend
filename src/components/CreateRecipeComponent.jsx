import React, { Component } from 'react'
import RecipeService from '../services/RecipeService';

class CreateRecipeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            name: '',
            description: '',
            favourite: ''
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.changeFavouriteHandler = this.changeFavouriteHandler.bind(this);
        this.saveOrUpdateRecipe = this.saveOrUpdateRecipe.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            RecipeService.getRecipeById(this.state.id).then( (res) =>{
                let recipe = res.data;
                this.setState({name: recipe.name,
                    description: recipe.description,
                    favourite : recipe.favourite
                });
            });
        }        
    }
    saveOrUpdateRecipe = (e) => {
        e.preventDefault();
        let recipe = {name: this.state.name, description: this.state.description, favourite: this.state.favourite};
        console.log('recipe => ' + JSON.stringify(recipe));

        // step 5
        if(this.state.id === '_add'){
            RecipeService.createRecipe(recipe).then(res =>{
                this.props.history.push('/recipes');
            });
        }else{
            RecipeService.updateRecipe(recipe, this.state.id).then( res => {
                this.props.history.push('/recipes');
            });
        }
    }
    
    changeNameHandler= (event) => {
        this.setState({name: event.target.value});
    }

    changeDescriptionHandler= (event) => {
        this.setState({description: event.target.value});
    }

    changeFavouriteHandler= (event) => {
        this.setState({favourite: event.target.value});
    }

    cancel(){
        this.props.history.push('/recipes');
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Recipe</h3>
        }else{
            return <h3 className="text-center">Update Recipe</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Name: </label>
                                            <input placeholder="Name" name="name" className="form-control" 
                                                value={this.state.name} onChange={this.changeNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Description: </label>
                                            <input placeholder="Description" name="description" className="form-control" 
                                                value={this.state.description} onChange={this.changeDescriptionHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Favourite: </label>
                                            <input placeholder="true / false" name="favourite" className="form-control" 
                                                value={this.state.favourite} onChange={this.changeFavouriteHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateRecipe}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default CreateRecipeComponent