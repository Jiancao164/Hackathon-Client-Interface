import React, {Component} from 'react'


export default class Calendar extends Component{



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
                            <a href={"https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=Y5UW6XWBNPASL&source=url"}>
                                <button
                                    className="btn btn-donate my-2 my-sm-0" type="submit">DONATE</button>
                            </a>
                        </div>

                    </nav>



                </div>
                <div className={"banners"}>
                    <h1 className={"banner-font"}>
                        Register our events / Make an appointment with us
                    </h1>
                </div>
                <div className={"container-fluid"}>
                    <div className={"row"}>
                        <div className={"col-8"}>
                            <iframe
                                className={"calendar"}
                                src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FLos_Angeles&amp;src=MnFmanFhY2FkMDhjNG05bnYyZWRjNzdmaGtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23AD1457&amp;showTz=0&amp;showCalendars=0"
                            />
                        </div>

                        <div className={"col-3 cal-note"}>
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