import React, {Component} from 'react'
import {findVideos} from "../services/VideoService";
import {Link} from "react-router-dom";
import cookingPot from '../common/cooking_pot.svg';
import alarmClock from '../common/alarm_clock.svg';
import utensil from '../common/dinner_knive&fork.svg';

class Video extends Component{
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
        }
    }
    componentDidMount = async () => {
        await findVideos().then(results => this.setState({
            videos: results
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
                                    <a className="nav-link" href="https://pvhealthtrust.org/">Home <span className="sr-only">(current)</span></a>
                                </li>


                                <li className="nav-item active">
                                    <a className="nav-link"
                                       href={"/recipes"}
                                    >Recipes</a>
                                </li>


                                <li className="nav-item active">
                                    <a className="nav-link"
                                       onClick={this.props.scrollSmoothHandler}>
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
                        {"All Videos"}
                    </h1>
                </div>
                <br/>

                <div className={"container"}>
                    <div >
                        {
                            this.state.videos && this.state.videos.map(video =>
                                <div key={video.id}>
                                    <div className="card mb-3" style={{maxWidth: "1230px"}}>
                                        <div className="row no-gutters">
                                            <div className="col-md-5" >
                                                {!video.url && <img className={"card-img-top new-movie-post"} src={!video.url && `https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg`}/>}
                                                {video.url &&  <iframe src={`${video.url}`} width="420" height="320" frameBorder="0" allowFullScreen/>}
                                            </div>
                                            <div className={"col-md-7"}>
                                                <div className="card-body ">
                                                    <div>
                                                        <Link className="card-title bold-font-title card-text-description" to={`/videos/${video.id}/details`}>
                                                            <h2>{video.title || video.name}</h2>
                                                        </Link>
                                                    </div>
                                                    <br/>
                                                    <p className={"card-text card-text-description"}>
                                                        {video.description}
                                                    </p>
                                                </div>
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

export default Video