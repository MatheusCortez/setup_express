import * as express from "express"
import { Request, Response } from "express"

const app = express()

app.get("/", (req: Request, res: Response) => {
  res.send("hello ")
})
app.listen(3000, () => console.log("porta 3000"))
