import axios from 'axios';

const RECIPE_API_BASE_URL = "http://localhost:8080/api/recipes";

class RecipeService {

    getRecipes(){
        return axios.get(RECIPE_API_BASE_URL);
    }

    createRecipe(Recipe){
        return axios.post(RECIPE_API_BASE_URL, Recipe);
    }

    getRecipeById(RecipeId){
        return axios.get(RECIPE_API_BASE_URL + '/' + RecipeId);
    }

    updateRecipe(Recipe, RecipeId){
        return axios.put(RECIPE_API_BASE_URL + '/' + RecipeId, Recipe);
    }

    deleteRecipe(RecipeId){
        return axios.delete(RECIPE_API_BASE_URL + '/' + RecipeId);
    }
}

export default new RecipeService()