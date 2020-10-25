import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CreateRecipeComponent from './components/CreateRecipeComponent';
import ViewRecipeComponent from './components/ViewRecipeComponent';
import ListRecipeComponent from './components/ListRecipeComponent';

function App() {
  return (
    <div>
      <Router>
        <div className="container">
          <Switch>
            <Route path="/" exact component={ListRecipeComponent}></Route>
            <Route path="/recipes" component={ListRecipeComponent}></Route>
            <Route path="/add-recipe/:id" component={CreateRecipeComponent}></Route>
            <Route path="/view-recipe/:id" component={ViewRecipeComponent}></Route>
            {/* <Route path = "/update-recipe/:id" component = {UpdateRecipeComponent}></Route> */}
          </Switch>
        </div>
      </Router>
    </div>

  );
}

export default App;