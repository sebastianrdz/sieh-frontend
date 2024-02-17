import { withPageAuthRequired, getSession } from "@auth0/nextjs-auth0";

async function DashboardPage() {
  return (
    <div>
      <h1 className="px-5 py-5">RESUMEN</h1>
    </div>
  );
}

export default withPageAuthRequired(DashboardPage, { returnTo: "/dashboard" });
