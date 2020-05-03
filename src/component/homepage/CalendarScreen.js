import React, {Component} from 'react'
import ScrollIntoView from 'react-scroll-into-view'

class CalendarScreen extends Component{
    render() {

        return(
            <div className={"container-recipe"} ref={this.props.scrollEvents} id={"cal"}>
                <img className={"cal-img"} src="https://i.ibb.co/GJwD2W3/We-Chat-Image-20200502172419.jpg"/>
                <a  style={{ color: '#FFF' }} className=" homepage-event-note container-frosted"  href={"/calendar"}>Learn How to Cook With Us</a>

            </div>
        )
    }
}

export default CalendarScreen