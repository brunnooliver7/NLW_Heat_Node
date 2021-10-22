import { Request, Response } from 'express';
import { AuthentitcateUserService } from '../services/AuthenticateUserService';

class AuthenticateUserController {
    async handle(req: Request, res: Response) {
        const { code } = req.body;
        const service = new AuthentitcateUserService();
        try {
            const result = await service.execute(code);
            return res.json(result);
        } catch (error) {
            return res.json({ error: error.message })
        }
    }
}

export { AuthenticateUserController };
