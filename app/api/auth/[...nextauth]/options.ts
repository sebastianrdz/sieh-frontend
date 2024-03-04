import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "Email", type: "text", placeholder: "your email" },
        password: { label: "Password", type: "password", placeholder: "your password"},
      },
      async authorize(credentials) {
        const user = { id: "123", name: "admin", email: "admin@test.com", password: "admin", roles: ["admin"]};
        if(credentials?.username === user.email && credentials?.password === user.password) {
          return user;
        } else return null;
      }
      })
  ],
}