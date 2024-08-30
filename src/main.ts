import express from 'express'
import {personalRouter} from './router/personal'
import 'dotenv/config'
import {globalRouter} from "./router/global";
import {authRouter} from "./router/auth";

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use("/api/v1", personalRouter)
app.use("/api/v1", globalRouter)
app.use("/api/v1", authRouter)

app.use((req: express.Request, res: express.Response) => {
    res.status(404).send('Not Found')
})

app.listen(process.env.PORT || 5000, () => {
    console.log('Listening on port ' + process.env.PORT || 5000)
})