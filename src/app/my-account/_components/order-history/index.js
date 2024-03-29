'use client'
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import './style.css'

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
]

export default function Orderhistory() {
  return (
    <div className="order-history-component">
      <div className='heading'>
          <h1>Your Past Orders</h1>
        </div>
      <div className="order-history-wrapper">
        <Table>
          <TableCaption className="invisible">A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow className='bg-primary-foreground'>
              <TableHead className="text-base text-accent font-roboto font-semibold ">S.No</TableHead>
              <TableHead className="text-base text-accent font-roboto font-semibold ">Order ID</TableHead>
              <TableHead className="text-base text-accent font-roboto font-semibold ">Order Date</TableHead>
              <TableHead className="text-base text-accent font-roboto font-semibold ">Payment Method</TableHead>
              <TableHead className="text-base text-accent font-roboto font-semibold ">Total Amount</TableHead>
              <TableHead className="text-base text-accent font-roboto font-semibold text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.invoice}>
                <TableCell className="text-base text-accent font-roboto">{invoice.invoice}</TableCell>
                <TableCell className="text-base text-accent font-roboto">{invoice.paymentStatus}</TableCell>
                <TableCell className="text-base text-accent font-roboto">{invoice.paymentMethod}</TableCell>
                <TableCell className="text-base text-accent font-roboto">{invoice.paymentMethod}</TableCell>
                <TableCell className="text-base text-accent font-roboto">{invoice.paymentMethod}</TableCell>
                <TableCell className="text-right px-0">
                  <Link href='/' className="text-base text-accent font-roboto bg-primary-foreground hover:bg-primary hover:text-white px-4 py-2">View</Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
          </TableFooter>
        </Table>
      </div>
    </div>
  )
}