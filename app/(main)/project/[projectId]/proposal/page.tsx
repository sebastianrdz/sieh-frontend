import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";
import { IProposalElement } from "./data/schema";

async function getData(): Promise<IProposalElement[]> {
  // Fetch data from your API here.
  return [
    {
      id: "1",
      title: "Titulo 1",
      description:
        "Lorem ipsum dolor sit amet consectetur. Proin pulvinar magna pellentesque arcu velit ultrices velit facilisi pellentesque. Massa urna mattis cursus etiam nibh imperdiet semper. Erat neque nunc leo mauris quisque quisque amet augue. Eu eu quis accumsan massa eu.",
      price: 100,
      stage: "Etapa 1",
    },
    {
      id: "2",
      title: "Titulo X",
      description:
        "Lorem ipsum dolor sit amet consectetur. Proin pulvinar magna pellentesque arcu velit ultrices velit facilisi pellentesque. Massa urna mattis cursus etiam nibh imperdiet semper. Erat neque nunc leo mauris quisque quisque amet augue. Eu eu quis accumsan massa eu.Lorem ipsum dolor sit amet consectetur. Proin pulvinar magna pellentesque arcu velit ultrices velit facilisi pellentesque. Massa urna mattis cursus etiam nibh imperdiet semper. Erat neque nunc leo mauris quisque quisque amet augue. Eu eu quis accumsan massa eu.",
      price: 100,
      stage: "Etapa 1",
    },
    {
      id: "3",
      title: "Titulo X",
      description: "Lorem ipsum dolor sit amet consectetur. Proin pulvin",
      price: 100,
      stage: "Etapa 1",
    },
    {
      id: "1",
      title: "Titulo 1",
      description:
        "Lorem ipsum dolor sit amet consectetur. Proin pulvinar magna pellentesque arcu velit ultrices velit facilisi pellentesque. Massa urna mattis cursus etiam nibh imperdiet semper. Erat neque nunc leo mauris quisque quisque amet augue. Eu eu quis accumsan massa eu.",
      price: 100,
      stage: "Etapa 1",
    },
    {
      id: "2",
      title: "Titulo X",
      description:
        "Lorem ipsum dolor sit amet consectetur. Proin pulvinar magna pellentesque arcu velit ultrices velit facilisi pellentesque. Massa urna mattis cursus etiam nibh imperdiet semper. Erat neque nunc leo mauris quisque quisque amet augue. Eu eu quis accumsan massa eu.Lorem ipsum dolor sit amet consectetur. Proin pulvinar magna pellentesque arcu velit ultrices velit facilisi pellentesque. Massa urna mattis cursus etiam nibh imperdiet semper. Erat neque nunc leo mauris quisque quisque amet augue. Eu eu quis accumsan massa eu.",
      price: 100,
      stage: "Etapa 1",
    },
    {
      id: "3",
      title: "Titulo X",
      description: "Lorem ipsum dolor sit amet consectetur. Proin pulvin",
      price: 100,
      stage: "Etapa 1",
    },
    {
      id: "1",
      title: "Titulo 1",
      description:
        "Lorem ipsum dolor sit amet consectetur. Proin pulvinar magna pellentesque arcu velit ultrices velit facilisi pellentesque. Massa urna mattis cursus etiam nibh imperdiet semper. Erat neque nunc leo mauris quisque quisque amet augue. Eu eu quis accumsan massa eu.",
      price: 100,
      stage: "Etapa 1",
    },
    {
      id: "2",
      title: "Titulo X",
      description:
        "Lorem ipsum dolor sit amet consectetur. Proin pulvinar magna pellentesque arcu velit ultrices velit facilisi pellentesque. Massa urna mattis cursus etiam nibh imperdiet semper. Erat neque nunc leo mauris quisque quisque amet augue. Eu eu quis accumsan massa eu.Lorem ipsum dolor sit amet consectetur. Proin pulvinar magna pellentesque arcu velit ultrices velit facilisi pellentesque. Massa urna mattis cursus etiam nibh imperdiet semper. Erat neque nunc leo mauris quisque quisque amet augue. Eu eu quis accumsan massa eu.",
      price: 100,
      stage: "Etapa 1",
    },
    {
      id: "3",
      title: "Titulo X",
      description: "Lorem ipsum dolor sit amet consectetur. Proin pulvin",
      price: 100,
      stage: "Etapa 1",
    },
    {
      id: "1",
      title: "Titulo 1",
      description:
        "Lorem ipsum dolor sit amet consectetur. Proin pulvinar magna pellentesque arcu velit ultrices velit facilisi pellentesque. Massa urna mattis cursus etiam nibh imperdiet semper. Erat neque nunc leo mauris quisque quisque amet augue. Eu eu quis accumsan massa eu.",
      price: 100,
      stage: "Etapa 1",
    },
    {
      id: "2",
      title: "Titulo X",
      description:
        "Lorem ipsum dolor sit amet consectetur. Proin pulvinar magna pellentesque arcu velit ultrices velit facilisi pellentesque. Massa urna mattis cursus etiam nibh imperdiet semper. Erat neque nunc leo mauris quisque quisque amet augue. Eu eu quis accumsan massa eu.Lorem ipsum dolor sit amet consectetur. Proin pulvinar magna pellentesque arcu velit ultrices velit facilisi pellentesque. Massa urna mattis cursus etiam nibh imperdiet semper. Erat neque nunc leo mauris quisque quisque amet augue. Eu eu quis accumsan massa eu.",
      price: 100,
      stage: "Etapa 1",
    },
    {
      id: "3",
      title: "Titulo X",
      description: "Lorem ipsum dolor sit amet consectetur. Proin pulvin",
      price: 100,
      stage: "Etapa 1",
    },
    {
      id: "1",
      title: "Titulo 1",
      description:
        "Lorem ipsum dolor sit amet consectetur. Proin pulvinar magna pellentesque arcu velit ultrices velit facilisi pellentesque. Massa urna mattis cursus etiam nibh imperdiet semper. Erat neque nunc leo mauris quisque quisque amet augue. Eu eu quis accumsan massa eu.",
      price: 100,
      stage: "Etapa 1",
    },
    {
      id: "2",
      title: "Titulo X",
      description:
        "Lorem ipsum dolor sit amet consectetur. Proin pulvinar magna pellentesque arcu velit ultrices velit facilisi pellentesque. Massa urna mattis cursus etiam nibh imperdiet semper. Erat neque nunc leo mauris quisque quisque amet augue. Eu eu quis accumsan massa eu.Lorem ipsum dolor sit amet consectetur. Proin pulvinar magna pellentesque arcu velit ultrices velit facilisi pellentesque. Massa urna mattis cursus etiam nibh imperdiet semper. Erat neque nunc leo mauris quisque quisque amet augue. Eu eu quis accumsan massa eu.",
      price: 100,
      stage: "Etapa 1",
    },
    {
      id: "3",
      title: "Titulo X",
      description: "Lorem ipsum dolor sit amet consectetur. Proin pulvin",
      price: 100,
      stage: "Etapa 1",
    },
    {
      id: "1",
      title: "Titulo 1",
      description:
        "Lorem ipsum dolor sit amet consectetur. Proin pulvinar magna pellentesque arcu velit ultrices velit facilisi pellentesque. Massa urna mattis cursus etiam nibh imperdiet semper. Erat neque nunc leo mauris quisque quisque amet augue. Eu eu quis accumsan massa eu.",
      price: 100,
      stage: "Etapa 1",
    },
    {
      id: "2",
      title: "Titulo X",
      description:
        "Lorem ipsum dolor sit amet consectetur. Proin pulvinar magna pellentesque arcu velit ultrices velit facilisi pellentesque. Massa urna mattis cursus etiam nibh imperdiet semper. Erat neque nunc leo mauris quisque quisque amet augue. Eu eu quis accumsan massa eu.Lorem ipsum dolor sit amet consectetur. Proin pulvinar magna pellentesque arcu velit ultrices velit facilisi pellentesque. Massa urna mattis cursus etiam nibh imperdiet semper. Erat neque nunc leo mauris quisque quisque amet augue. Eu eu quis accumsan massa eu.",
      price: 100,
      stage: "Etapa 1",
    },
    {
      id: "3",
      title: "Titulo X",
      description: "Lorem ipsum dolor sit amet consectetur. Proin pulvin",
      price: 100,
      stage: "Etapa 1",
    },
    {
      id: "1",
      title: "Titulo 1",
      description:
        "Lorem ipsum dolor sit amet consectetur. Proin pulvinar magna pellentesque arcu velit ultrices velit facilisi pellentesque. Massa urna mattis cursus etiam nibh imperdiet semper. Erat neque nunc leo mauris quisque quisque amet augue. Eu eu quis accumsan massa eu.",
      price: 100,
      stage: "Etapa 1",
    },
    {
      id: "2",
      title: "Titulo X",
      description:
        "Lorem ipsum dolor sit amet consectetur. Proin pulvinar magna pellentesque arcu velit ultrices velit facilisi pellentesque. Massa urna mattis cursus etiam nibh imperdiet semper. Erat neque nunc leo mauris quisque quisque amet augue. Eu eu quis accumsan massa eu.Lorem ipsum dolor sit amet consectetur. Proin pulvinar magna pellentesque arcu velit ultrices velit facilisi pellentesque. Massa urna mattis cursus etiam nibh imperdiet semper. Erat neque nunc leo mauris quisque quisque amet augue. Eu eu quis accumsan massa eu.",
      price: 100,
      stage: "Etapa 1",
    },
    {
      id: "3",
      title: "Titulo X",
      description: "Lorem ipsum dolor sit amet consectetur. Proin pulvin",
      price: 100,
      stage: "Etapa 1",
    },
    {
      id: "1",
      title: "Titulo 1",
      description:
        "Lorem ipsum dolor sit amet consectetur. Proin pulvinar magna pellentesque arcu velit ultrices velit facilisi pellentesque. Massa urna mattis cursus etiam nibh imperdiet semper. Erat neque nunc leo mauris quisque quisque amet augue. Eu eu quis accumsan massa eu.",
      price: 100,
      stage: "Etapa 1",
    },
    {
      id: "2",
      title: "Titulo X",
      description:
        "Lorem ipsum dolor sit amet consectetur. Proin pulvinar magna pellentesque arcu velit ultrices velit facilisi pellentesque. Massa urna mattis cursus etiam nibh imperdiet semper. Erat neque nunc leo mauris quisque quisque amet augue. Eu eu quis accumsan massa eu.Lorem ipsum dolor sit amet consectetur. Proin pulvinar magna pellentesque arcu velit ultrices velit facilisi pellentesque. Massa urna mattis cursus etiam nibh imperdiet semper. Erat neque nunc leo mauris quisque quisque amet augue. Eu eu quis accumsan massa eu.",
      price: 100,
      stage: "Etapa 1",
    },
    {
      id: "3",
      title: "Titulo X",
      description: "Lorem ipsum dolor sit amet consectetur. Proin pulvin",
      price: 100,
      stage: "Etapa 1",
    },
    {
      id: "1",
      title: "Titulo 1",
      description:
        "Lorem ipsum dolor sit amet consectetur. Proin pulvinar magna pellentesque arcu velit ultrices velit facilisi pellentesque. Massa urna mattis cursus etiam nibh imperdiet semper. Erat neque nunc leo mauris quisque quisque amet augue. Eu eu quis accumsan massa eu.",
      price: 100,
      stage: "Etapa 1",
    },
    {
      id: "2",
      title: "Titulo X",
      description:
        "Lorem ipsum dolor sit amet consectetur. Proin pulvinar magna pellentesque arcu velit ultrices velit facilisi pellentesque. Massa urna mattis cursus etiam nibh imperdiet semper. Erat neque nunc leo mauris quisque quisque amet augue. Eu eu quis accumsan massa eu.Lorem ipsum dolor sit amet consectetur. Proin pulvinar magna pellentesque arcu velit ultrices velit facilisi pellentesque. Massa urna mattis cursus etiam nibh imperdiet semper. Erat neque nunc leo mauris quisque quisque amet augue. Eu eu quis accumsan massa eu.",
      price: 100,
      stage: "Etapa 1",
    },
    {
      id: "3",
      title: "Titulo X",
      description: "Lorem ipsum dolor sit amet consectetur. Proin pulvin",
      price: 100,
      stage: "Etapa 1",
    },
    // ...
  ];
}

export default async function Proposal() {
  const data = await getData();

  return <DataTable columns={columns} defaultData={data} />;
}
