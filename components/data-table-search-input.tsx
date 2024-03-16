"use client";

import { Table } from "@tanstack/react-table";
import { Input } from "@/components/ui/input";

interface DataTableSearchInputProps<TData> {
  table: Table<TData>;
  value: string;
}

export function DataTableSearchInput<TData>({
  table,
  value,
}: DataTableSearchInputProps<TData>) {
  return (
    <Input
      placeholder={`Buscar...`}
      value={(table.getColumn(value)?.getFilterValue() as string) ?? ""}
      onChange={(event) =>
        table.getColumn(value)?.setFilterValue(event.target.value)
      }
      className="max-w-sm"
    />
  );
}
