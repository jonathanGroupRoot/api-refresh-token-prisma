import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";
import { Request, Response } from "express";


class AuthenticateUserController {
    async handle(request: Request, response: Response) {
        const { username, password } = request.body;

        const authenticateUser = new AuthenticateUserUseCase();

        const user = await authenticateUser.authenticate({
            username,
            password
        });

        return response.json(user);
    }
}

export { AuthenticateUserController };