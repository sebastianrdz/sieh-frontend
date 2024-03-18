"use client";
import { Table } from "@tanstack/react-table";
import { Icons } from "@/components/assets/icons";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IProposalElement } from "../data/schema";
import { DataTableBugetEntryDialog } from "./data-table-budget-entry-dialog";
import { DataTableBugetEntryAlertDialog } from "./data-table-budget-entry-alert-dialog";

interface DataTableActionsProps<TData> {
  row: IProposalElement;
  table: Table<TData>;
}

export function DataTableActions<TData>({
  row,
  table,
}: DataTableActionsProps<TData>) {
  const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <Icons.moreHorizontal width={24} className="min-w-6" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>Acciones</DropdownMenuLabel>
          <DropdownMenuItem onClick={() => setOpen(true)}>
            <Icons.edit width={16} className="mr-2" />
            Editar
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => setOpenAlert(true)}
            className="text-red-500 focus:text-red-500"
          >
            <Icons.trash width={16} className="mr-2" />
            Eliminar
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <DataTableBugetEntryDialog
        open={open}
        setOpen={setOpen}
        row={row}
        table={table}
      />
      <DataTableBugetEntryAlertDialog
        open={openAlert}
        setOpen={setOpenAlert}
        row={row}
        table={table}
      />
    </>
  );
}
