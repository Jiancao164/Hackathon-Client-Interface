import React, {Component} from 'react'
import ScrollIntoView from 'react-scroll-into-view'

class VideoScreen extends Component{
    render() {
        return(
            <div className={"container-recipe"} ref={this.props.scrollDiv} id={"cal"}>
                <img className={"cal-img"} src="https://i.ibb.co/hmGt1WT/cooking.jpg"/>

                    <div>
                        <a style={{ color: '#FFF' }} className=" homepage-video-note" href={"/videos"}>Watch Cooking Demo Become a Chef</a>
                    </div>


            </div>


        )
    }
}

export default VideoScreen