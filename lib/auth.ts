import { error } from "console";
import { User } from "next-auth"



type LoginFn = (email: string, password: string) => Promise<User>

export const login: LoginFn = async (email, password) => {
  // sync with database here
  const mockUsers = [{ id: "123", name: "admin", email: "admin@test.com", password: "admin", roles: ["admin"]}];
  const user = mockUsers.find((user) => user.email === email);

  if (!user) {
    throw new Error("User not found");
  }
  else {
    if (user.password !== password) {
      throw new Error("Password is incorrect");
    }
    user.password = "";
    return user;
  }
}