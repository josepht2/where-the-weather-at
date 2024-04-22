import express, { Express, Response, Request } from 'express'

import { getWeather } from './getWeather'

const PORT = 8080

const app: Express = express()

app.use(
    (req: Request, res: Response, next: any) => {
        res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
        next()
  }
)

app.get('/weather', getWeather)

app.listen(PORT, () => {
    console.log(`server started on ${PORT}`)
})