import axios from 'axios'
import dotenv from 'dotenv'
import { Response, Request } from 'express'

dotenv.config()

const { WEATHER_API_API_KEY } = process.env

export const getWeather = ({ query: { city } }: Request, res: Response) => {
    axios.get(`http://api.weatherapi.com/v1/current.json?key=${WEATHER_API_API_KEY}&q=${city}`)
        .then(
            ({ data }) => {
                res.send(data)
            }
        )
        .catch(
            (e) => {
                res.sendStatus(e.response.status)
            }
        )
}