import { CreateUserUseCase } from "./CreateUserUseCase";
import { Request, Response } from "express";

class CreateUserController {
    async handle(request: Request, response: Response) {
        const { username, name, password } = request.body;

        const createUserUserUseCase = new CreateUserUseCase();

        const user = await createUserUserUseCase.execute({
            username,
            name,
            password
        });

        return response.json({User: user});
    }
}

export { CreateUserController };