import React, {Component} from 'react'
import ScrollIntoView from 'react-scroll-into-view'

class CalendarScreen extends Component{
    render() {
        return(
            <div ref={this.props.scrollEvents} id={"cal"}>
                <img className={"cal-img"} src="https://i.ibb.co/7Cqf9Vz/We-Chat-Image-20200429195759.jpg"/>
            </div>
        )
    }
}

export default CalendarScreen