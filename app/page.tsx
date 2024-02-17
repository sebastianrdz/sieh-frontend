import { withPageAuthRequired, getSession } from "@auth0/nextjs-auth0";

async function Home() {
  return (
    <div className="bg-muted h-screen w-full flex justify-center items-center">
      <a href="/api/auth/login">Login</a>
    </div>
  );
}

export default withPageAuthRequired(Home, { returnTo: "/dashboard" });
