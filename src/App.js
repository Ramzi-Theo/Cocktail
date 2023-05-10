// import { Box, Stack } from "@mui/material";
// import { Container } from "@mui/system";
import Navbar from "./components/Navbar";
import CocktailList from './components/cocktailList';
import { Route,Switch } from "react-router-dom";
import SingleCocktail from "./components/singleCocktail";

function App(){
  return(
      <div className="App">
        <Navbar />
        <Switch>
      <Route exact path="/" component={CocktailList} />
      <Route exact path="/cocktail/:id" component={SingleCocktail} />
      </Switch>
      </div>
  );
}
export default App;

