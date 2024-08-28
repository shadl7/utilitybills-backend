import express from 'express'
import {MainRouter} from './router/main'
import 'dotenv/config'

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use((req: express.Request, res: express.Response) => {
    res.status(404).send('Not Found')
})

app.listen(process.env.PORT || 5000, () => {
    console.log('Listening on port ' + process.env.PORT || 5000)
})