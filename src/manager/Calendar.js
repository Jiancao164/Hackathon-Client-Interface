import React from 'react'
import {Component} from "react";

import { ScheduleComponent, Inject, Day, Week, WorkWeek, Month, Agenda} from '@syncfusion/ej2-react-schedule';


class Calendar extends Component {


    render() {
        return (
            <div>
                <ScheduleComponent>
                    <Inject services={[Day, Week, WorkWeek, Month, Agenda]}/>
                </ScheduleComponent>
            </div>
    )
    }
}

export default Calendar