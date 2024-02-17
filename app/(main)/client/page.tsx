import { withPageAuthRequired, getSession } from "@auth0/nextjs-auth0";

async function ClientPage() {
  return (
    <div>
      <h1 className="px-5 py-5">CLIENTES</h1>
    </div>
  );
}

export default withPageAuthRequired(ClientPage, { returnTo: "/client" });
