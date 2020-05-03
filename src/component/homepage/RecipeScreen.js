import React, {Component} from 'react'

class RecipeScreen extends Component{
    render() {
        return(
            <div className={"container-recipe"} ref={this.props.scrollRecipes}>
                <img className={"recipe-img"} src="https://i.ibb.co/3y1jsc1/We-Chat-Image-20200429210510.jpg"/>
                <a style={{ color: '#FFF' }} className="container-frosted-recipe  recipe-note" href={"/recipes"}>Check Our Healthy Recipes</a>
                {/*<div className="bottom-left">Check Our Healthy Recipes</div>*/}
            </div>
        )
    }
}

export default RecipeScreen