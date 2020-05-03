import React, {Component} from 'react'
import Heading from "../component/homepage/Heading";
import RecipeScreen from "../component/homepage/RecipeScreen";
import CalendarScreen from "../component/homepage/VideoScreen";
import HomePage from "../component/homepage/HomePage";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Recipes from "../component/recipepage/Recipes";
import RecipeDetails from "../component/recipepage/RecipeDetails";
import Calendar from "../component/calendar/Calendar";
import Video from "../component/video/Video";
import VideoDetails from "../component/video/VideoDetail";

class Manager extends Component{
    render() {
        return(
            <div>
                <Router>
                    <Route
                        path="/"
                        exact={true}
                        render={(props) =>
                            <HomePage
                                {...props}/>
                        }/>
                    <Route
                        path={"/recipes"}
                        exact={true}
                        component={Recipes}/>
                    <Route
                        path={"/recipes/:rid/details"}
                        exact={true}
                        component={RecipeDetails}/>
                    <Route
                        path={"/calendar"}
                        exact={true}
                        component={Calendar}/>
                    <Route
                        path={"/videos"}
                        exact={true}
                        component={Video}/>
                    <Route
                        path={"/videos/:vid/details"}
                        exact={true}
                        component={VideoDetails}/>


                </Router>
            </div>
        )
    }
}

export default Manager