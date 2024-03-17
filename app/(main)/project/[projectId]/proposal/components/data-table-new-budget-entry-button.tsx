"use client";
import { Icons } from "@/components/assets/icons";
import { Button } from "@/components/ui/button";
import { Table } from "@tanstack/react-table";
import { useState } from "react";
import { DataTableBugetEntryDialog } from "./data-table-budget-entry-dialog";

interface DataTableNewBudgetEntryButtonProps<TData> {
  table: Table<TData>;
}

export function DataTableNewBudgetEntryButton<TData>({
  table,
}: DataTableNewBudgetEntryButtonProps<TData>) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        onClick={() => {
          setOpen(true);
        }}
        variant="outline"
        className="ml-auto"
      >
        <Icons.plus width={16} className="mr-2" />
        Nuevo Apartado
      </Button>

      <DataTableBugetEntryDialog open={open} setOpen={setOpen} table={table} />
    </>
  );
}
