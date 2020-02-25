import React from "react";
import { Switch, Route} from "react-router-dom";
import "../styles/styles.css";
import HomePage from "./HomePage";
import Challenge1Page from "./Challenge1Page";
import Challenge2Page from "./Challenge2Page";
import FinishPage from "./FinishPage";
import Nav from './Nav'
import Banner from "./Banner";


export default class App extends React.Component {
  render() {
  return (
    <div className="App">
      <Nav />
      <Banner />
       <Switch>
         <Route exact path='/'>  
             <HomePage />
         </Route>
         <Route path="/isLongWord" >
            <Challenge1Page />
         </Route>
         <Route  path="/multiply">
          <Challenge2Page />
         </Route>
         <Route path="/finished">
            <FinishPage  />
         </Route>
       </Switch>
    </div>
  );
  }
}