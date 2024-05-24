import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FaCheckCircle } from "react-icons/fa";

const rows = [
  {
    rowHeading: "",
  },
];

const BookKeepingTable = () => {
  return (
    <Table>
      <TableCaption>List of Available Facilitites.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]"></TableHead>
          <TableHead>Full Charge Bookkeeper</TableHead>
          <TableHead>Certified Public Accountant</TableHead>
          <TableHead className="text-right">Financial Controller</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">INV001</TableCell>
          <TableCell>
            <CheckCircle />
          </TableCell>
          <TableCell>
            <CheckCircle />
          </TableCell>
          <TableCell className="text-right font-semibold">Yes</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default BookKeepingTable;

function CheckCircle() {
  return (
    <div className="block text-right text-2xl text-mainG">
      <FaCheckCircle />
    </div>
  );
}
