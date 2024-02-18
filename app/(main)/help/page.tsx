import { withPageAuthRequired, getSession } from "@auth0/nextjs-auth0";

async function HelpPage() {
  return (
    <div>
      <h1 className="px-5 py-5">AYUDA</h1>
    </div>
  );
}

export default withPageAuthRequired(HelpPage, { returnTo: "/help" });
