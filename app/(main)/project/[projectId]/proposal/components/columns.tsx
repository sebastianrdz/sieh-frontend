"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Icons } from "@/components/assets/icons";
import { DataTableColumnHeader } from "@/components/data-table-column-header";
import { IProposalElement } from "../data/schema";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<IProposalElement>[] = [
  // {
  //   id: "select",
  //   header: ({ table }) => (
  //     <Checkbox
  //       checked={
  //         table.getIsAllPageRowsSelected() ||
  //         (table.getIsSomePageRowsSelected() && "indeterminate")
  //       }
  //       onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
  //       aria-label="Select all"
  //     />
  //   ),
  //   cell: ({ row }) => (
  //     <Checkbox
  //       checked={row.getIsSelected()}
  //       onCheckedChange={(value) => row.toggleSelected(!!value)}
  //       aria-label="Select row"
  //     />
  //   ),
  //   enableSorting: false,
  //   enableHiding: false,
  // },
  // {
  //   accessorKey: "id",
  //   header: "ID",
  // },
  // {
  //   accessorKey: "title",
  //   header: "Titulo",
  // },
  {
    accessorKey: "description",
    header: "Descripción",
    cell: ({ row }) => {
      const description = JSON.parse(
        JSON.stringify(row.getValue("description"))
      );
      return <div className="line-clamp-2 min-w-[400px]">{description}</div>;
    },
  },
  {
    accessorKey: "price",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Precio" />
    ),
    cell: ({ row }) => {
      const price = parseFloat(row.getValue("price"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "MXN",
      }).format(price);

      return <div className="text-left font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "stage",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Etapa" />
    ),
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const proposalElement = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <Icons.moreHorizontal width={24} className="min-w-6" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Acciones</DropdownMenuLabel>
            {/* <DropdownMenuSeparator /> */}
            {/* <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(proposalElement.id)}
            >
              Copy payment ID
            </DropdownMenuItem> */}
            <DropdownMenuItem>
              <Icons.eye width={16} className="mr-2" />
              Detalles
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Icons.edit width={16} className="mr-2" />
              Editar
            </DropdownMenuItem>
            <DropdownMenuItem className="text-red-500 focus:text-red-500">
              <Icons.trash width={16} className="mr-2" />
              Eliminar
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
