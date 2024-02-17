import { withPageAuthRequired, getSession } from "@auth0/nextjs-auth0";

async function DashboardPage() {
  return (
    <div>
      <h2 className="text-bold font-bold text-xl px-5 py-5">RESUMEN</h2>
    </div>
  );
}

export default withPageAuthRequired(DashboardPage, { returnTo: "/dashboard" });
