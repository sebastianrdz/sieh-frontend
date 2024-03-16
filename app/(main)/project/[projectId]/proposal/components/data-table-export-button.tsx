"use client";

import { Icons } from "@/components/assets/icons";
import { Button } from "@/components/ui/button";
import { Table } from "@tanstack/react-table";

interface DataTableExportButtonProps<TData> {
  table: Table<TData>;
}

export function DataTableExportButton<TData>({
  table,
}: DataTableExportButtonProps<TData>) {
  return (
    <Button
      onClick={() => {
        console.log("Exporting table data...");
      }}
      variant="outline"
    >
      <Icons.download width={16} className="mr-2" />
      Exportar
    </Button>
  );
}
