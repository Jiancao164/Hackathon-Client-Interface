import React, {Component} from 'react'
import {updateRecipe} from "../services/RecipeService";
import arrowWhite from "../common/circle_arrow_White.svg";

class RecipeScreen extends Component{
    render() {
        return(
            <div className={"container-recipe"} ref={this.props.scrollRecipes}>
                <a href={"/recipes"}><img
                    className={"arrowWhite"} src={arrowWhite}/></a>
                <img className={"recipe-img"} src="https://i.ibb.co/254xscd/We-Chat-Image-20200503182111.jpg"/>
                <a style={{ color: '#FFF' }} className="container-frosted-recipe  recipe-note" >Check Our Healthy Recipes</a>
                {/*<div className="bottom-left">Check Our Healthy Recipes</div>*/}
            </div>
        )
    }
}

export default RecipeScreen