import React, {Component} from 'react'
import {Link} from "react-router-dom";
import arrowWhite from "../common/circle_arrow_bottom.svg";

class HomeScreen extends Component{
    render() {
        return(
            <div className={"container-recipe"} ref={this.props.scrollHome}>
                <a ><img
                    onClick={this.props.scrollRecipesHandler}
                    className={"arrowWhite"} src={arrowWhite}/></a>
                <Link to={"/recipes"}><img className={"recipe-img"} src="https://i.ibb.co/3y1jsc1/We-Chat-Image-20200429210510.jpg"/></Link>
                <div>
                    <a style={{ color: '#FFF' }} className="container-frosted-recipe  home-note" >Appropriate Nutrition Can Highly Improve Your Quality of Life. Join Us, Enjoy Your Health.</a>
                </div>
                <div className={"home-note2"}>
                    Eating for Everyday Wellness
                </div>

                {/*<div className="bottom-left">Check Our Healthy Recipes</div>*/}
            </div>
        )
    }
}

export default HomeScreen