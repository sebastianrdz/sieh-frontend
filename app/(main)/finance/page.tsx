import { withPageAuthRequired, getSession } from "@auth0/nextjs-auth0";

async function FinancePage() {
  return (
    <div>
      <h1 className="px-5 py-5">FINANZAS</h1>
    </div>
  );
}

export default withPageAuthRequired(FinancePage, { returnTo: "/finance" });
