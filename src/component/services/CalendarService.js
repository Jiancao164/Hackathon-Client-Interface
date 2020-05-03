import {HEROKU_SERVER_URL} from "../common/constant";

export const findCalendars = async () =>
    await fetch(`${HEROKU_SERVER_URL}/calendars`).then(response => response.json());

