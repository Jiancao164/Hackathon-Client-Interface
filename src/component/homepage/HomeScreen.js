import React, {Component} from 'react'
import {Link} from "react-router-dom";
import arrowWhite from "../common/circle_arrow_bottom.svg";

class HomeScreen extends Component{
    render() {
        return(
            <div className={"container-recipe"} ref={this.props.scrollHome}>
                <a><img
                    onClick={this.props.scrollRecipesHandler}
                    className={"arrowWhite-homepage arrowWhite"} src={arrowWhite}/></a>
                <img className={"recipe-img"} src="https://i.niupic.com/images/2020/05/05/7BpM.jpg"/>
                <div>
                    <a style={{ color: '#FFF' }} className="container-frosted-recipe  home-note" >Improving your nutrition will improve your health!</a>
                </div>
                <div className={"home-note2"}>
                    Eating for Everyday Wellness
                </div>

            </div>
        )
    }
}

export default HomeScreen