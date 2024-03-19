"use client";
import { Icons } from "@/components/assets/icons";
import { Button } from "@/components/ui/button";
import { Table } from "@tanstack/react-table";
import { useState } from "react";
import { DataTableBugetEntryDialog } from "./data-table-budget-entry-dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface DataTableNewBudgetEntryButtonProps<TData> {
  table: Table<TData>;
}

export function DataTableNewBudgetEntryButton<TData>({
  table,
}: DataTableNewBudgetEntryButtonProps<TData>) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <TooltipProvider>
        <Tooltip disableHoverableContent>
          <TooltipTrigger asChild>
            <Button
              onClick={() => {
                setOpen(true);
              }}
              variant="outline"
              className="ml-auto gap-2"
            >
              <Icons.plus width={16} className="min-w-4" />
              <div className="hidden sm:flex">Nuevo Apartado</div>
            </Button>
          </TooltipTrigger>
          <TooltipContent className="flex sm:hidden">
            <div>Nuevo Apartado</div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

      <DataTableBugetEntryDialog open={open} setOpen={setOpen} table={table} />
    </>
  );
}
