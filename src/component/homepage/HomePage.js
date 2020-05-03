import React, {Component, createRef} from 'react'
import Heading from "./Heading";
import RecipeScreen from "./RecipeScreen";
import VideoScreen from "./VideoScreen";
import CalendarScreen from "./CalendarScreen";
import HomeScreen from "./HomeScreen";

class HomePage extends Component{
    constructor(props) {
        super(props);
    }
    scrollDiv = createRef();
    scrollRecipes = createRef();
    scrollEvents = createRef();
    scrollHome = createRef();

    scrollHomeHandler = () => {
        this.scrollHome.current.scrollIntoView({ behavior: "smooth" });
    };
    scrollSmoothHandler = () => {
        this.scrollDiv.current.scrollIntoView({ behavior: "smooth" });
    };
    scrollRecipesHandler = () => {
        this.scrollRecipes.current.scrollIntoView({ behavior: "smooth" });
    };
    scrollEventsHandler = () => {
        this.scrollEvents.current.scrollIntoView({ behavior: "smooth" });
    };


    render() {
        return(
            <div>
                <Heading
                    scrollHomeHandler={this.scrollHomeHandler}
                    scrollEventsHandler={this.scrollEventsHandler}
                    scrollRecipesHandler={this.scrollRecipesHandler}
                    scrollSmoothHandler={this.scrollSmoothHandler}/>
                <HomeScreen
                    scrollRecipesHandler={this.scrollRecipesHandler}
                    scrollHome={this.scrollHome}/>
                <RecipeScreen scrollRecipes={this.scrollRecipes}/>
                <VideoScreen scrollDiv={this.scrollDiv}/>
                <CalendarScreen scrollEvents={this.scrollEvents}/>
            </div>
        )
    }
}
export default HomePage