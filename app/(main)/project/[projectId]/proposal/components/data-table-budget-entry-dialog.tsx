"use client";
import { Table } from "@tanstack/react-table";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Dispatch, SetStateAction } from "react";
import { useToast } from "@/components/ui/use-toast";
import { IProposalElement } from "../data/schema";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface DataTableBugetEntryDialogProps<TData> {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  row?: IProposalElement;
  table: Table<TData>;
}

const formSchema = z.object({
  description: z.string().min(1, { message: "Descripcion es requerida" }),
  price: z.string().refine((price) => Number(price) > 0, {
    message: "Precio debe ser mayor a 0",
  }),
  stage: z.string().min(1, { message: "Etapa es requerida" }),
});

export function DataTableBugetEntryDialog<TData>({
  open,
  setOpen,
  row,
  table,
}: DataTableBugetEntryDialogProps<TData>) {
  const { toast } = useToast();
  const meta = table?.options.meta;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      description: row?.description ?? "",
      price: String(row?.price) ?? "",
      stage: row?.stage ?? "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    row ? (meta as any).editRow(values, row.id) : (meta as any).addRow(values);
    setOpen(false);
    form.reset();
    toast({
      title: row ? "Apartado editado" : "Apartado creado",
      description: `El apartado ha sido ${
        row ? "editado" : "creado"
      } exitosamente`,
    });
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className=" sm:max-w-[625px] lg:max-w-[825px]">
        <DialogHeader>
          <DialogTitle className="uppercase">
            {row ? "Editar" : "Crear"} Apartado
          </DialogTitle>
          <DialogDescription>
            {row ? "Edita" : "Llena"} la informacion de este apartado
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid grid-cols-2 gap-5"
          >
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel>Descripcion</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Lorem ipsum dolor sit amet consectetur. Proin pulvinar magna pellentesque arcu velit ultrices velit facilisi pellentesque."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Precio</FormLabel>
                  <FormControl>
                    <Input placeholder="100.00" type="number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="stage"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Etapa</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Seleciona una etapa" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent side="bottom">
                      {["Etapa 1", "Etapa 2", "Etapa 3"].map((stage) => (
                        <SelectItem key={stage} value={`${stage}`}>
                          {stage}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter className="col-span-2">
              <Button type="submit" variant="default">
                {row ? "Editar" : "Crear"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
