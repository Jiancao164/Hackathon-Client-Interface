import React, {Component} from 'react'
import ScrollIntoView from 'react-scroll-into-view'
import arrowWhite from "../common/circle_arrow_White.svg";

class CalendarScreen extends Component{
    render() {

        return(
            <div className={"container-recipe"} ref={this.props.scrollEvents} id={"cal"}>
                <a href={"/calendar"}><img
                    className={"arrowWhite"} src={arrowWhite}/></a>
                <img className={"cal-img"} src="https://i.ibb.co/LSxzqcw/We-Chat-Image-20200503154656.jpg"/>
                <a  style={{ color: '#FFF' }} className=" homepage-event-note container-frosted" >Learn How to Cook With Us</a>

            </div>
        )
    }
}

export default CalendarScreen