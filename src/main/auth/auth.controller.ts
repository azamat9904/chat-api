import { Auth as AuthModel } from './auth.model'
import { Request, Response } from 'express'
import { IAuth } from './auth.interface'

class AuthController {
    async signUp(req: Request, res: Response) {
        try {
            const requestPayload: IAuth = req.body
            const user = new AuthModel(requestPayload)
            await user.save()

            res.status(200).json({
                message: 'Пользователь успешно создан',
                user: user,
            })
        } catch (error: any) {
            res.status(500).send({
                message: error.message,
            })
        }
    }
}

export const authController = new AuthController()
