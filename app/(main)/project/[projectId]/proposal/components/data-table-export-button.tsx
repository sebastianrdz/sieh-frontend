"use client";

import { Icons } from "@/components/assets/icons";
import { Button } from "@/components/ui/button";
import { Table } from "@tanstack/react-table";
import * as XLSX from "xlsx";

interface DataTableExportButtonProps<TData> {
  table: Table<TData>;
  data: TData[];
}

export function DataTableExportButton<TData>({
  table,
  data,
}: DataTableExportButtonProps<TData>) {
  const downloadExcel = () => {
    const worksheet = XLSX?.utils.json_to_sheet(data);
    const workbook = XLSX?.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    XLSX.writeFile(workbook, "DataSheet.xlsx");
  };

  return (
    <Button onClick={downloadExcel} variant="outline">
      <Icons.download width={16} className="mr-2" />
      Exportar
    </Button>
  );
}
