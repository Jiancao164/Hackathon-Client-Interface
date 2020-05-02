import React, {Component} from 'react'
import ScrollIntoView from 'react-scroll-into-view'

class VideoScreen extends Component{
    render() {
        return(
            <div ref={this.props.scrollDiv} id={"cal"}>
                <img className={"cal-img"} src="https://i.ibb.co/hmGt1WT/cooking.jpg"/>
            </div>
        )
    }
}

export default VideoScreen