import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Plus } from "lucide-react";
import Link from "next/link";
import React from "react";
import { columns } from "./components/colums-table";

export default function Airplane() {
  return (
    <>
      <div className="flex flex-row items-center justify-between">
        <div className="my-5 text-2xl font-bold">Airplane</div>
        <Button asChild>
          <Link href={"/dashboard/create"}>
            <Plus className="mr-2 h-5 w-5" />
            Tambah Data
          </Link>
        </Button>
      </div>
      <DataTable columns={columns} data={[]} />
    </>
  );
}
