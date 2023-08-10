import { AuthService } from "../src/AuthService";
import { testUsers } from "../src/mocks";

describe("Auth service", () => {
    let authService: AuthService;
    const registeredUsers = testUsers.slice(0, 5);
    const notRegisteredUsers = testUsers.slice(6, 10);

    beforeEach(() => {
        authService = new AuthService();
    });

    describe("Register", () => {
        it("should return false when username or password are empty", async () => {
            const { username, password } = notRegisteredUsers[0];

            await expect(authService.register("", password)).resolves.toBeFalsy();
            await expect(authService.register(username, "")).resolves.toBeFalsy();
        });

        describe("when some users are already registered", () => {
            beforeEach(async () => {
                for (const user of registeredUsers) {
                    await authService.register(user.username, user.password);
                }
            });

            it("should return false when username already exists", async () => {
                const { username, password } = registeredUsers[0];

                await expect(
                    authService.register(username, password)
                ).resolves.toBeFalsy();
            });

            it("should return true when username is available", async () => {
                const { username, password } = notRegisteredUsers[1];

                await expect(
                    authService.register(username, password)
                ).resolves.toBeTruthy();
            });
        });
    });

    describe("Login", () => {
        beforeEach(async () => {
            for (const user of registeredUsers) {
                await authService.register(user.username, user.password);
            }
        });

        it("should return false when username or password do not match", async () => {
            const { username, password } = registeredUsers[1];

            await expect(
                authService.login(username, "invalid-password")
            ).resolves.toBeFalsy();
            await expect(
                authService.login("invalid-username", password)
            ).resolves.toBeFalsy();
        });

        it("should return true when username and password match with user already registered", async () => {
            const { username, password } = registeredUsers[2];

            await expect(authService.login(username, password)).resolves.toBeTruthy();
        });
    });
});