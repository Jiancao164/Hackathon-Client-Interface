import React, {Component} from 'react'
import {Link} from "react-router-dom";
import {findRecipeById, findRecipes, updateRecipe} from "../services/RecipeService";
import {findNutrition} from "../services/NutritionService";
import cookingPot from '../common/cooking_pot.svg';
import alarmClock from '../common/alarm_clock.svg';
import utensil from '../common/dinner_knive&fork.svg';
import thumbsDown from '../common/thumbs_down_1223114_easyicon.net.svg';
import thumbsUp from '../common/thumbs_up_1223115_easyicon.net.svg';
import Banner from 'react-js-banner';




class RecipeDetails extends Component{
    constructor(props) {
        super(props);
        this.state = {
            recipe: {},
            vote: false,
            email: "",

        }
    }

    componentDidMount = async () => {
        await findRecipeById(this.props.match.params.rid).then(results => this.setState({
            recipe: results
        }));
    };



    render() {
        return(
            <div>
                <div className={"heading-top sticky-top"}>
                    <nav className="navbar navbar-expand-lg navbar-light sticky-top">
                        <a className="navbar-brand" href="https://pvhealthtrust.org/">
                            <img src="https://pvhealthtrust.org/wp-content/uploads/2017/05/pvcht_logo_427x120.jpg"
                                 alt="Pajaro Valley Community Health Trust" width="427" height="120"
                                 className="img-responsive"/>
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <a className="nav-link" href="https://pvhealthtrust.org/">PVCHT <span className="sr-only">(current)</span></a>
                                </li>

                                <li className="nav-item active">
                                    <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item active">
                                    <a className="nav-link"
                                       href={"/recipes"}
                                       onClick={this.props.scrollRecipesHandler}
                                    >Recipes</a>
                                </li>

                                <li className="nav-item active">
                                    <a className="nav-link"
                                       href={"/videos"}>
                                        Videos
                                    </a>
                                </li>
                                <li className="nav-item  active">
                                    <a className="nav-link"
                                       href={"/calendar"}
                                       onClick={this.props.scrollEventsHandler}>Events</a>
                                </li>
                            </ul>
                            <a href={"https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=Y5UW6XWBNPASL&source=url"}>
                                <button
                                    className="btn btn-donate my-2 my-sm-0" type="submit">DONATE</button>
                            </a>
                        </div>

                    </nav>



                </div>
                <div className={"banners"}>
                    <h1 className={"banner-font"}>
                        {this.state.recipe.title}
                    </h1>
                </div>
                <div className={"container"}>
                    <br/>

                    <div>
                        <br/>
                    </div>

                    <div className={"row"}>
                        <div className={"recipe-image col-6"}>
                            {!this.state.recipe.url && <img className={"card-img-top new-movie-post"} src={!this.state.recipe.url && `https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg`}/>}
                            {this.state.recipe.url && <img className={"card-img-top new-movie-post"} src={this.state.recipe.url && `${this.state.recipe.url}`}/>}
                        </div>
                        <div className={"col-6"}>
                            <div className={"recipe-description"}>
                                {this.state.recipe.description}
                            </div>

                            <br/>
                            <div className={"row thumbs-vote "}>
                                <img
                                    onClick = {() => {{!this.state.vote && this.setState({recipe: {...this.state.recipe, upvote: this.state.recipe.upvote + 1}})};
                                        this.setState({vote: true});
                                        {!this.state.vote && updateRecipe(this.props.match.params.rid, {...this.state.recipe, upvote: this.state.recipe.upvote + 1})}}}
                                    className={"thumbs"} src={thumbsUp}/>
                                <h2>{this.state.recipe.upvote}</h2>

                                <img
                                    onClick = {() => {{!this.state.vote && this.setState({recipe: {...this.state.recipe, downvote: this.state.recipe.downvote + 1}})};
                                        this.setState({vote: true});
                                        {!this.state.vote && updateRecipe(this.props.match.params.rid, {...this.state.recipe, downvote: this.state.recipe.downvote + 1})}}}

                                    className={"thumbs-down"} src={thumbsDown}/>
                                <h2>{this.state.recipe.downvote}</h2>
                            </div>

                        </div>
                    </div>
                    <br/>


                    <div className={"row icon-email"}>
                        <div className={"row col-6"}>
                            <div className={"row col-5"}>
                                <div>
                                    <img className={"info"} src={alarmClock} alt="cookingPot" />
                                </div>
                                <div>
                                    <div>Prep time</div>
                                    <h4 className={"icon-note"}>{this.state.recipe.preTime}</h4>
                                </div>
                            </div>

                            <div className={"row col-5"}>
                                <div>
                                    <img className={"info"} src={cookingPot} alt="cookingPot" />
                                </div>
                                <div>
                                    <div>Cook time</div>
                                    <h4 className={"icon-note"}>{this.state.recipe.cookTime}</h4>
                                </div>
                            </div>

                            <div className={"row col-4"}>
                                <div>
                                    <img className={"info"} src={utensil} alt="cookingPot" />
                                </div>
                                <div>
                                    <div>Servings</div>
                                    <h4 className={"icon-note"}>{this.state.recipe.servings}</h4>
                                </div>
                            </div>
                        </div>
                        <div className={"row col-6"}>
                            <div className={"form-control-email"}>
                                <input
                                    type={"email"}
                                    onChange={(e) => this.setState({
                                        email: e.target.value
                                    })}
                                    style={{height: "52px", width: "320px"}}
                                    className="form-control" placeholder="Email" aria-label="Username"
                                    value={this.state.email} aria-describedby="basic-addon1"/>
                            </div>
                            <div className={"float-right"}>
                                <button
                                    className={"btn btn-email "}>Sign me in</button>
                            </div>

                        </div>



                    </div>
                    <div className="shadow p-3 mb-5 bg-white rounded">
                        <h2 className={"bold-font"}>Nutrition Facts(per serving)</h2>
                        <ul className={"normal-font"}>
                            {this.state.recipe.nutritions && this.state.recipe.nutritions.sort((a, b) => (a.id > b.id)? 1 : -1).map(nutrition =>
                                <li key={nutrition.id}>
                                    {nutrition.nutritionDetail}
                                </li>)}
                        </ul>
                    </div>
                    <div className="shadow p-3 mb-5 bg-white rounded">
                        <h2 className={"bold-font"}>Ingredients</h2>
                        <ul className={"normal-font"}>
                            {this.state.recipe.ingredients && this.state.recipe.ingredients.sort((a, b) => (a.id > b.id)? 1 : -1).map(ingredient =>
                                <li key={ingredient.id}>
                                    {ingredient.ingredientDetail}
                                </li>)}
                        </ul>
                    </div>

                    <div className="shadow p-3 mb-5 bg-white rounded">
                        <h2 className={"bold-font"}>Directions</h2>
                        <ol className={"normal-font"}>
                            {this.state.recipe.steps && this.state.recipe.steps.sort((a, b) => (a.id > b.id)? 1 : -1).map(step =>
                                <li key={step.id}>
                                    {step.processDetail}
                                </li>)}
                        </ol>
                    </div>
                    {/*<div className="card" style={{width: "18re", backgroundColor: '#F1F0EA'}}>*/}
                            {/*<div className="card-body">*/}
                                {/*<div>*/}
                                    {/*<h2 className={"bold-font"}>Directions</h2>*/}
                                    {/*<ol className={"normal-font"}>*/}
                                        {/*{this.state.recipe.steps && this.state.recipe.steps.sort((a, b) => (a.id > b.id)? 1 : -1).map(step =>*/}
                                            {/*<li key={step.id}>*/}
                                                {/*{step.processDetail}*/}
                                            {/*</li>)}*/}
                                    {/*</ol>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                    {/*</div>*/}

                </div>

            </div>
        )
    }
}

export default RecipeDetails