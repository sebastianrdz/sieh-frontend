"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DataTablePagination } from "@/components/data-table-pagination";
import { DataTableSearchInput } from "@/components/data-table-search-input";
import { DataTableExportButton } from "./data-table-export-button";
import { DataTableNewBudgetEntryButton } from "./data-table-new-budget-entry-button";
import { IProposalElement } from "../data/schema";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  defaultData: TData[];
}

export function DataTable<TData, TValue>({
  columns,
  defaultData,
}: DataTableProps<TData, TValue>) {
  const [data, setData] = React.useState(() => [...defaultData]);
  const [originalData, setOriginalData] = React.useState(() => [
    ...defaultData,
  ]);
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
    meta: {
      addRow: (element: any) => {
        const newRow: IProposalElement = {
          id: String(Math.floor(Math.random() * 10000)),
          title: "element.title",
          description: element.description,
          price: element.price,
          stage: element.stage,
        };
        console.log(newRow);
        const setFunc = (old: any) => [...old, newRow];
        setData(setFunc);
        setOriginalData(setFunc);
      },
      editRow: (element: any, rowId: string) => {
        const setFilterFunc = (old: any) =>
          old.map((row: IProposalElement) => {
            if (row.id === rowId) {
              return { ...row, ...element };
            }
            return row;
          });
        setData(setFilterFunc);
        setOriginalData(setFilterFunc);
      },
      removeRow: (rowId: string) => {
        console.log("hey");
        // const setFilterFunc = (old: any) =>
        //   old.filter(
        //     (_row: IProposalElement, index: number) => index !== rowIndex
        //   );
        const setFilterFunc = (old: any) => {
          const newData = old.filter(
            (row: IProposalElement) => row.id !== rowId
          );
          // console.log(newData, old, rowId);
          return newData;
        };
        console.log(rowId);
        setData(setFilterFunc);
        setOriginalData(setFilterFunc);
      },
    },
  });

  return (
    <div className="md:container">
      <div className="flex items-center py-4 gap-5">
        <DataTableSearchInput table={table} value="description" />
        <DataTableNewBudgetEntryButton table={table} />
        <DataTableExportButton table={table} data={data} />
        {/* <DataTableViewOptions table={table} /> */}
      </div>

      <div className="rounded-md border overflow-auto">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No hay resultados.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <div className=" flex items-center border-t justify-end space-x-2 py-4 ">
          <DataTablePagination table={table} />
        </div>
      </div>
    </div>
  );
}
