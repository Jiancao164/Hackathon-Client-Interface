import React, {Component, createRef} from 'react'
import Heading from "./Heading";
import RecipeScreen from "./RecipeScreen";
import VideoScreen from "./VideoScreen";
import CalendarScreen from "./CalendarScreen";

class HomePage extends Component{
    constructor(props) {
        super(props);
    }
    scrollDiv = createRef();
    scrollRecipes = createRef();
    scrollEvents = createRef();


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
                    scrollEventsHandler={this.scrollEventsHandler}
                    scrollRecipesHandler={this.scrollRecipesHandler}
                    scrollSmoothHandler={this.scrollSmoothHandler}/>
                <RecipeScreen scrollRecipes={this.scrollRecipes}/>
                <VideoScreen scrollDiv={this.scrollDiv}/>
                <CalendarScreen scrollEvents={this.scrollEvents}/>
            </div>
        )
    }
}
export default HomePage