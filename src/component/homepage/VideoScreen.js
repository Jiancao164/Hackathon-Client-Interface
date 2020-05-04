import React, {Component} from 'react'
import ScrollIntoView from 'react-scroll-into-view'
import playWhite from "../common/circle_player_White.svg"

class VideoScreen extends Component{
    render() {
        return(
            <div className={"container-recipe"} ref={this.props.scrollDiv} id={"cal"}>
                <a href={"/videos"}><img
                    className={"arrowWhite"} src={playWhite}/></a>
                <img className={"cal-img"} src="https://i.ibb.co/hmGt1WT/cooking.jpg"/>
                    <div>
                        <a style={{ color: '#FFF' }} className=" container-frosted homepage-video-note" >Learn How to Cook with Us </a>
                    </div>


            </div>


        )
    }
}

export default VideoScreen