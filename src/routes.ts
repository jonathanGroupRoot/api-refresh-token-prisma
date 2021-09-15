import { Router } from "express";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";
import { AuthenticateUserController } from "./useCases/authenticateUser/AuthenticateUserController";
import { CreateUserController } from "./useCases/createUser/CreateUserController";
import { RefreshTokenController } from "./useCases/refreshTokenUser/refreshTokenUserController";


const routes = Router();

const createUserController = new CreateUserController();
const authenticateController = new AuthenticateUserController();
const refreshTokenController = new RefreshTokenController();

//USER
routes.post("/users", createUserController.handle);

//AUTHENTICATE
routes.post("/authenticate", authenticateController.handle);

//COURSES
routes.get("/courses", ensureAuthenticated,(request, response) => {
    return response.json([
        { id: 1, name: "NodeJs" },
        { id: 2, name: "ReactJs" },
        { id: 3, name: "ReactNative" },
        { id: 4, name: "Flutter" },
        { id: 5, name: "Elixir" }
    ])
});

//REFRESH TOKEN
routes.post("/refresh-token", refreshTokenController.handle);

export { routes };