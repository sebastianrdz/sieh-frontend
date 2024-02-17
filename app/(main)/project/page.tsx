import { withPageAuthRequired, getSession } from "@auth0/nextjs-auth0";

async function ProjectPage() {
  return (
    <div>
      <h1 className="px-5 py-5">PROYECTO</h1>
    </div>
  );
}

export default withPageAuthRequired(ProjectPage, { returnTo: "/project" });
