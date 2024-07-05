import express from 'express'
import { Application, Request, Response } from 'express';
const app : Application = express()
const port = 3000

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

console.log(process.cwd())

