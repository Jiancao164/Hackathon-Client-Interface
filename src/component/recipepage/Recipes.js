import React, {Component} from 'react'
import {findRecipes} from "../services/RecipeService";
import {Link} from "react-router-dom";
import cookingPot from '../common/cooking_pot.svg';
import alarmClock from '../common/alarm_clock.svg';
import utensil from '../common/dinner_knive&fork.svg';

class Recipes extends Component{
    constructor(props) {
        super(props);
        this.state = {
            recipes: [],
        }
    }
    componentDidMount = async () => {
        await findRecipes().then(results => this.setState({
            recipes: results
        }))
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
                        {"All Recipes"}
                    </h1>
                </div>
                <br/>
                <div className={"container"}>
                    <div className={"row row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-3"}>
                        {
                            this.state.recipes && this.state.recipes.map(recipe =>
                                <div key={recipe.id} className="col mb-4">
                                    <div className="card h-100">
                                        <Link className="card-title" to={`/recipes/${recipe.id}/details`}>
                                            {!recipe.url && <img className={"card-img-top new-movie-post"} src={!recipe.url && `https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg`}/>}
                                            {recipe.url && <img className={"card-img-top new-movie-post"} src={recipe.url && `${recipe.url}`}/>}
                                        </Link>
                                        <div className="card-body">
                                            <Link className="card-title card-recipe-title" to={`/recipes/${recipe.id}/details`}>
                                                <h5>{recipe.title || recipe.name}</h5>
                                            </Link>
                                            <div className="card-body-release-time row">
                                                <div className="text-muted"><img className={"info-small info-small-icon"} src={alarmClock} alt="cookingPot" />{recipe.preTime}</div>
                                                <div className="text-muted"><img className={"info-small info-small-icon"} src={cookingPot} alt="cookingPot" />{recipe.cookTime}</div>
                                                <div className="text-muted"><img className={"info-small info-small-icon"} src={utensil} alt="cookingPot" />{recipe.servings}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>


                </div>
            </div>
        )
    }
}

export default Recipes