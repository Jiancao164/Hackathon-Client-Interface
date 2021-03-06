import React, {Component} from 'react'
import {findCalendars} from "../services/CalendarService";


export default class Calendar extends Component{



    componentDidMount = () => {

        findCalendars().then(result => this.setState({
            url: result[0].url.toString()
        }))
    };

    state = {
        url: ""
    };

    render() {
        return (
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
                                       onClick={this.props.scrollEventsHandler}>Events</a>
                                </li>
                            </ul>

                        </div>

                    </nav>



                </div>
                <div className={"banners"}>
                    <h1 className={"banner-font"}>
                        Register for events/ make an appointment
                    </h1>
                </div>
                <div className={"container-fluid"}>
                    <div className={"row"}>
                        <div className={"col-8"}>
                            {<iframe
                                className={"calendar"}
                                src={this.state.url}
                            />}
                        </div>

                        <div className={"col-4 cal-note"}>
                            <h1 className={"bold-font-title"}>
                                Check our calendar,
                                pick a cooking class you are interested or make an appointment with our specialists.
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}