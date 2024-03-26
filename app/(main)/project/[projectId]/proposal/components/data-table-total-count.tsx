import { Table } from "@tanstack/react-table";

interface DataTableTotalCountProps<TData> {
  table: Table<TData>;
}

export function DataTableTotalCount<TData>({
  table,
}: DataTableTotalCountProps<TData>) {
  const meta = table?.options.meta;
  const price = (meta as any).getPriceSum();
  const formatted = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "MXN",
  }).format(price);
  return <div>Total: {formatted}</div>;
}
