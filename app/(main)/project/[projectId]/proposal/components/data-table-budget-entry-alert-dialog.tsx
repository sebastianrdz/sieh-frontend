"use client";
import { Table } from "@tanstack/react-table";
import { Dispatch, SetStateAction } from "react";
import { useToast } from "@/components/ui/use-toast";
import { IProposalElement } from "../data/schema";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface DataTableBugetEntryAlertDialogProps<TData> {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  row?: IProposalElement;
  table?: Table<TData>;
}

export function DataTableBugetEntryAlertDialog<TData>({
  open,
  setOpen,
  row,
  table,
}: DataTableBugetEntryAlertDialogProps<TData>) {
  const { toast } = useToast();

  async function onSubmit() {
    setOpen(false);
    // table?.options.meta?.removeRow(row?.index);
    toast({
      title: "Apartado eliminado",
      description: "El apartado ha sido eliminado exitosamente",
    });
  }

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Estas seguro? </AlertDialogTitle>
          <AlertDialogDescription>
            Esta accion no se puede deshacer. Esto eliminara permanentemente el
            apartado con el id: {row?.id}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction onClick={onSubmit}>Eliminar</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
