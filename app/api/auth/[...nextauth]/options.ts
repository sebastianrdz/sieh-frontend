import { login } from "@/lib/auth";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "your email" },
        password: { label: "Password", type: "password", placeholder: "your password"},
      },
      async authorize(credentials) {
        if(!credentials?.email || !credentials?.password) {
          return null;
        }
        try {
          const user = login(credentials.email, credentials.password);
          return user;
        } catch (e) {
          console.log(e);
          return null
        }
      }
      })
  ],
  pages: {
    signIn: "/sign-in",
  }
}