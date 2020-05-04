import React, {Component} from 'react'
import {Link} from "react-router-dom";
import {findVideoById, findVideos, updateVideo} from "../services/VideoService";
import {findNutrition} from "../services/NutritionService";
import cookingPot from '../common/cooking_pot.svg';
import alarmClock from '../common/alarm_clock.svg';
import utensil from '../common/dinner_knive&fork.svg';
import thumbsDown from '../common/thumbs_down_1223114_easyicon.net.svg';
import thumbsUp from '../common/thumbs_up_1223115_easyicon.net.svg';
import Banner from 'react-js-banner';




class VideoDetails extends Component{
    constructor(props) {
        super(props);
        this.state = {
            video: {},
            vote: false,
            email: "",

        }
    }

    componentDidMount = async () => {
        await findVideoById(this.props.match.params.vid).then(results => this.setState({
            video: results
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

                        </div>

                    </nav>



                </div>
                <div className={"banners"}>
                    <h1 className={"banner-font"}>
                        {this.state.video.title}
                    </h1>
                </div>
                <div className={"container"}>
                    <br/>

                    <div>
                        <br/>
                    </div>

                    {this.state.video.url &&  <iframe src={`${this.state.video.url}`} width="1100" height="620" frameBorder="0" allowFullScreen/>}
                    <div>
                        <h1 className={"bold-font-title"}>{this.state.video.title}</h1>
                    </div>
                    <div className={"normal-font"}>
                        {this.state.video.description}
                    </div>
                    <br/>
                </div>

            </div>
        )
    }
}

export default VideoDetails