"use client";
import { Table } from "@tanstack/react-table";
import { Dispatch, SetStateAction } from "react";
import { useToast } from "@/components/ui/use-toast";
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
import { IProject } from "../data/schema";

interface NewProjectAlertDialogProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  data: IProject;
  setData: Dispatch<SetStateAction<IProject[]>>;
}

export function NewProjectAlertDialog({
  open,
  setOpen,
  data,
  setData,
}: NewProjectAlertDialogProps) {
  const { toast } = useToast();

  async function onSubmit() {
    setData((prev) => prev.filter((project) => project.id !== data.id));
    setOpen(false);
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
            apartado con el id: {data?.id}
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
