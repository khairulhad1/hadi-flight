"use client";

import { Button } from "@/components/ui/button";
import { AirPlane } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import { Pencil } from "lucide-react";
import Link from "next/link";

export const columns: ColumnDef<AirPlane>[] = [
  {
    accessorKey: "image",
    header: "Image",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "code",
    header: "Code",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const plane = row.original;
      return (
        <div className="flex gap-5 items-center">
          <Button variant="secondary" size="sm" asChild>
            <Link href={`/dashboard/airplanes/edit/${plane.id}`}>
              <Pencil className="mr-2 h-4 w-4" />
              Edit
            </Link>
          </Button>
        </div>
      );
    },
  },
];
