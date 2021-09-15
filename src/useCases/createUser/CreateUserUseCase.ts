import { hash } from "bcryptjs";
import { client } from "../../prisma/client"

interface IUserRequest {
    username: string;
    name: string;
    password: string;
}


class CreateUserUseCase {
    async execute({username, name, password }: IUserRequest) {
        const alreadyExists = await client.user.findFirst({
            where: {
                username,
            }
        });

        if (alreadyExists) {
            throw new Error("User already exists!");
        }

        const passwordHash = await hash(password, 8);

        const user = await client.user.create({
            data: {
                name,
                username,
                password: passwordHash
            }
        })

        return user;
    }
}

export { CreateUserUseCase }