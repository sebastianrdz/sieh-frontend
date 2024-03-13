import { IProposalElement, columns } from "./columns";
import { DataTable } from "./data-table";

async function getData(): Promise<IProposalElement[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      description:
        "Lorem ipsum dolor sit amet consectetur. Proin pulvinar magna pellentesque arcu velit ultrices velit facilisi pellentesque. Massa urna mattis cursus etiam nibh imperdiet semper. Erat neque nunc leo mauris quisque quisque amet augue. Eu eu quis accumsan massa eu.",
      price: 100,
      stage: "Etapa 1",
      actions: "",
    },
    {
      id: "728ed52f",
      description:
        "Lorem ipsum dolor sit amet consectetur. Proin pulvinar magna pellentesque arcu velit ultrices velit facilisi pellentesque. Massa urna mattis cursus etiam nibh imperdiet semper. Erat neque nunc leo mauris quisque quisque amet augue. Eu eu quis accumsan massa eu.",
      price: 100,
      stage: "Etapa 1",
      actions: "",
    },
    {
      id: "728ed52f",
      description:
        "Lorem ipsum dolor sit amet consectetur. Proin pulvinar magna pellentesque arcu velit ultrices velit facilisi pellentesque. Massa urna mattis cursus etiam nibh imperdiet semper. Erat neque nunc leo mauris quisque quisque amet augue. Eu eu quis accumsan massa eu.",
      price: 100,
      stage: "Etapa 1",
      actions: "",
    },
    {
      id: "728ed52f",
      description:
        "Lorem ipsum dolor sit amet consectetur. Proin pulvinar magna pellentesque arcu velit ultrices velit facilisi pellentesque. Massa urna mattis cursus etiam nibh imperdiet semper. Erat neque nunc leo mauris quisque quisque amet augue. Eu eu quis accumsan massa eu.",
      price: 100,
      stage: "Etapa 1",
      actions: "",
    },
    {
      id: "728ed52f",
      description:
        "Lorem ipsum dolor sit amet consectetur. Proin pulvinar magna pellentesque arcu velit ultrices velit facilisi pellentesque. Massa urna mattis cursus etiam nibh imperdiet semper. Erat neque nunc leo mauris quisque quisque amet augue. Eu eu quis accumsan massa eu.",
      price: 100,
      stage: "Etapa 1",
      actions: "",
    },
    {
      id: "728ed52f",
      description:
        "Lorem ipsum dolor sit amet consectetur. Proin pulvinar magna pellentesque arcu velit ultrices velit facilisi pellentesque. Massa urna mattis cursus etiam nibh imperdiet semper. Erat neque nunc leo mauris quisque quisque amet augue. Eu eu quis accumsan massa eu.",
      price: 100,
      stage: "Etapa 1",
      actions: "",
    },
    {
      id: "728ed52f",
      description:
        "Lorem ipsum dolor sit amet consectetur. Proin pulvinar magna pellentesque arcu velit ultrices velit facilisi pellentesque. Massa urna mattis cursus etiam nibh imperdiet semper. Erat neque nunc leo mauris quisque quisque amet augue. Eu eu quis accumsan massa eu.",
      price: 100,
      stage: "Etapa 1",
      actions: "",
    },
    {
      id: "728ed52f",
      description:
        "Lorem ipsum dolor sit amet consectetur. Proin pulvinar magna pellentesque arcu velit ultrices velit facilisi pellentesque. Massa urna mattis cursus etiam nibh imperdiet semper. Erat neque nunc leo mauris quisque quisque amet augue. Eu eu quis accumsan massa eu.",
      price: 100,
      stage: "Etapa 1",
      actions: "",
    },
    {
      id: "728ed52f",
      description:
        "Lorem ipsum dolor sit amet consectetur. Proin pulvinar magna pellentesque arcu velit ultrices velit facilisi pellentesque. Massa urna mattis cursus etiam nibh imperdiet semper. Erat neque nunc leo mauris quisque quisque amet augue. Eu eu quis accumsan massa eu.",
      price: 100,
      stage: "Etapa 1",
      actions: "",
    },
    {
      id: "728ed52f",
      description:
        "Lorem ipsum dolor sit amet consectetur. Proin pulvinar magna pellentesque arcu velit ultrices velit facilisi pellentesque. Massa urna mattis cursus etiam nibh imperdiet semper. Erat neque nunc leo mauris quisque quisque amet augue. Eu eu quis accumsan massa eu.",
      price: 100,
      stage: "Etapa 1",
      actions: "",
    },
    {
      id: "728ed52f",
      description:
        "Lorem ipsum dolor sit amet consectetur. Proin pulvinar magna pellentesque arcu velit ultrices velit facilisi pellentesque. Massa urna mattis cursus etiam nibh imperdiet semper. Erat neque nunc leo mauris quisque quisque amet augue. Eu eu quis accumsan massa eu.",
      price: 100,
      stage: "Etapa 1",
      actions: "",
    },
    {
      id: "728ed52f",
      description:
        "Lorem ipsum dolor sit amet consectetur. Proin pulvinar magna pellentesque arcu velit ultrices velit facilisi pellentesque. Massa urna mattis cursus etiam nibh imperdiet semper. Erat neque nunc leo mauris quisque quisque amet augue. Eu eu quis accumsan massa eu.",
      price: 100,
      stage: "Etapa 1",
      actions: "",
    },
    {
      id: "728ed52f",
      description:
        "Lorem ipsum dolor sit amet consectetur. Proin pulvinar magna pellentesque arcu velit ultrices velit facilisi pellentesque. Massa urna mattis cursus etiam nibh imperdiet semper. Erat neque nunc leo mauris quisque quisque amet augue. Eu eu quis accumsan massa eu.",
      price: 100,
      stage: "Etapa 1",
      actions: "",
    },
    {
      id: "728ed52f",
      description:
        "Lorem ipsum dolor sit amet consectetur. Proin pulvinar magna pellentesque arcu velit ultrices velit facilisi pellentesque. Massa urna mattis cursus etiam nibh imperdiet semper. Erat neque nunc leo mauris quisque quisque amet augue. Eu eu quis accumsan massa eu.",
      price: 100,
      stage: "Etapa 1",
      actions: "",
    },
    {
      id: "728ed52f",
      description:
        "Lorem ipsum dolor sit amet consectetur. Proin pulvinar magna pellentesque arcu velit ultrices velit facilisi pellentesque. Massa urna mattis cursus etiam nibh imperdiet semper. Erat neque nunc leo mauris quisque quisque amet augue. Eu eu quis accumsan massa eu.",
      price: 100,
      stage: "Etapa 2",
      actions: "",
    },
    {
      id: "728ed52f",
      description:
        "Lorem ipsum dolor sit amet consectetur. Proin pulvinar magna pellentesque arcu velit ultrices velit facilisi pellentesque. Massa urna mattis cursus etiam nibh imperdiet semper. Erat neque nunc leo mauris quisque quisque amet augue. Eu eu quis accumsan massa eu.",
      price: 100,
      stage: "Etapa 1",
      actions: "",
    },
    {
      id: "728ed52f",
      description:
        "Lorem ipsum dolor sit amet consectetur. Proin pulvinar magna pellentesque arcu velit ultrices velit facilisi pellentesque. Massa urna mattis cursus etiam nibh imperdiet semper. Erat neque nunc leo mauris quisque quisque amet augue. Eu eu quis accumsan massa eu.",
      price: 100,
      stage: "Etapa 1",
      actions: "",
    },
    {
      id: "728ed52f",
      description:
        "Lorem ipsum dolor sit amet consectetur. Proin pulvinar magna pellentesque arcu velit ultrices velit facilisi pellentesque. Massa urna mattis cursus etiam nibh imperdiet semper. Erat neque nunc leo mauris quisque quisque amet augue. Eu eu quis accumsan massa eu.",
      price: 100,
      stage: "Etapa 1",
      actions: "",
    },
    {
      id: "728ed52f",
      description:
        "Lorem ipsum dolor sit amet consectetur. Proin pulvinar magna pellentesque arcu velit ultrices velit facilisi pellentesque. Massa urna mattis cursus etiam nibh imperdiet semper. Erat neque nunc leo mauris quisque quisque amet augue. Eu eu quis accumsan massa eu.",
      price: 100,
      stage: "Etapa 1",
      actions: "",
    },
    {
      id: "728ed52f",
      description:
        "Lorem ipsum dolor sit amet consectetur. Proin pulvinar magna pellentesque arcu velit ultrices velit facilisi pellentesque. Massa urna mattis cursus etiam nibh imperdiet semper. Erat neque nunc leo mauris quisque quisque amet augue. Eu eu quis accumsan massa eu.",
      price: 100,
      stage: "Etapa 2",
      actions: "",
    },
    {
      id: "728ed52f",
      description:
        "Lorem ipsum dolor sit amet consectetur. Proin pulvinar magna pellentesque arcu velit ultrices velit facilisi pellentesque. Massa urna mattis cursus etiam nibh imperdiet semper. Erat neque nunc leo mauris quisque quisque amet augue. Eu eu quis accumsan massa eu.",
      price: 100,
      stage: "Etapa 1",
      actions: "",
    },
    {
      id: "728ed52f",
      description:
        "Lorem ipsum dolor sit amet consectetur. Proin pulvinar magna pellentesque arcu velit ultrices velit facilisi pellentesque. Massa urna mattis cursus etiam nibh imperdiet semper. Erat neque nunc leo mauris quisque quisque amet augue. Eu eu quis accumsan massa eu.",
      price: 100,
      stage: "Etapa 1",
      actions: "",
    },
    {
      id: "728ed52f",
      description:
        "Lorem ipsum dolor sit amet consectetur. Proin pulvinar magna pellentesque arcu velit ultrices velit facilisi pellentesque. Massa urna mattis cursus etiam nibh imperdiet semper. Erat neque nunc leo mauris quisque quisque amet augue. Eu eu quis accumsan massa eu.",
      price: 100,
      stage: "Etapa 1",
      actions: "",
    },
    {
      id: "728ed52f",
      description:
        "Lorem ipsum dolor sit amet consectetur. Proin pulvinar magna pellentesque arcu velit ultrices velit facilisi pellentesque. Massa urna mattis cursus etiam nibh imperdiet semper. Erat neque nunc leo mauris quisque quisque amet augue. Eu eu quis accumsan massa eu.",
      price: 100,
      stage: "Etapa 1",
      actions: "",
    },
    {
      id: "728ed52f",
      description:
        "Lorem ipsum dolor sit amet consectetur. Proin pulvinar magna pellentesque arcu velit ultrices velit facilisi pellentesque. Massa urna mattis cursus etiam nibh imperdiet semper. Erat neque nunc leo mauris quisque quisque amet augue. Eu eu quis accumsan massa eu.",
      price: 100,
      stage: "Etapa 2",
      actions: "",
    },
    // ...
  ];
}

export default async function Proposal() {
  const data = await getData();

  return (
    <div className="container  mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
