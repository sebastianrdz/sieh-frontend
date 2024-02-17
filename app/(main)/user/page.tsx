import { withPageAuthRequired, getSession } from "@auth0/nextjs-auth0";

async function UserPage() {
  return (
    <div>
      <h1 className="px-5 py-5">USUARIOS</h1>
    </div>
  );
}

export default withPageAuthRequired(UserPage, { returnTo: "/user" });
