import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";
import { IProposalElement } from "./data/schema";
import { tasks } from "./data/seed";

async function getData(): Promise<IProposalElement[]> {
  // Fetch data from your API here.
  return tasks;
}

export default async function Proposal() {
  const data = await getData();

  return <DataTable columns={columns} defaultData={data} />;
}
