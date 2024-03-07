// app/api/route.js 👈🏽

const projects = [
  {
    id: "1",
    name: "Jumex",
    status: "Activo",
    date: "Ene 17 - Mar 3",
    description: "Deploy your new project in one-click.",
  },
  {
    id: "2",
    name: "Jumex",
    status: "Activo",
    date: "Ene 17 - Mar 3",
    description: "Deploy your new project in one-click.",
  },
  {
    id: "3",
    name: "Jumex",
    status: "Cotizacion",
    date: "Ene 17 - Mar 3",
    description: "Deploy your new project in one-click.",
  },
  {
    id: "4",
    name: "Jumex",
    status: "Cotizacion",
    date: "Ene 17 - Mar 3",
    description: "Deploy your new project in one-click.",
  },
  {
    id: "5",
    name: "Jumex",
    status: "Terminado",
    date: "Ene 17 - Mar 3",
    description: "Deploy your new project in one-click.",
  },
];

import { NextResponse } from "next/server";

// To handle a GET request to /api
export async function GET(request: Request, context: { params: {id: string} }) {
  // Do whatever you want
  return NextResponse.json({ data: projects }, { status: 200 });
}

// // To handle a POST request to /api
// export async function POST(request: any) {
//   // Do whatever you want
//   return NextResponse.json({ message: "Hello World" }, { status: 200 });
// }

// // Same logic to add a `PATCH`, `DELETE`...