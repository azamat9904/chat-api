import express from "express"
import { Request, Response} from "express";

const router = express.Router()

router.post('/sign-up',(req: Request, res: Response) => {
    res.send('success')
})

export default router
