"use client";

import { Icons } from "@/components/assets/icons";
import { Button } from "@/components/ui/button";
import { Table } from "@tanstack/react-table";

interface DataTableNewBudgetEntryButtonProps<TData> {
  table: Table<TData>;
}

export function DataTableNewBudgetEntryButton<TData>({
  table,
}: DataTableNewBudgetEntryButtonProps<TData>) {
  return (
    <Button
      onClick={() => {
        console.log("Opening new budget entry modal...");
      }}
      variant="outline"
      className="ml-auto"
    >
      <Icons.plus width={16} className="mr-2" />
      Nuevo Apartado
    </Button>
  );
}
