"use client";
import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import { getCsrfToken, signIn } from "next-auth/react";

export default function CredentialsSignIn() {
  return (
    <form method="post" action="/api/auth/callback/credentials">
      <label>
        Username
        <input name="username" type="text" />
      </label>
      <label>
        Password
        <input name="password" type="password" />
      </label>
      <button
        type="submit"
        onClick={() =>
          signIn("credentials", { username: "jsmith", password: "1234" })
        }
      >
        Sign in
      </button>
    </form>
  );
}
