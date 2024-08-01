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
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function Orderhistory() {
  const { data: pastOrders } = useQuery({
    queryKey: ['orders'],
    queryFn: () =>
      axios.get('/my-account/previous-orders/api/get-past-orders')
        .then((response) => { return response.data.getOrders })
        .catch((error) => console.log("Error while fetching Orders", error))
  })

  const orderDate = pastOrders?.orderDate;
  if (orderDate) {
    const date = new Date(orderDate);

    // Format the date
    var formattedDate = `${date.toLocaleDateString()}`;
    var formattedTime = `${date.toLocaleTimeString()}`;

  }

  // Helper function to format date
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false, // Set to true if you prefer a 12-hour clock format
  });
};


  return (
    <div className="order-history-component min-h-screen">
      <div className='heading'>
        <h1>Your Past Orders</h1>
      </div>
      <div className="order-history-wrapper">
        <Table className='border border-secondary'>
          <TableCaption className="invisible">A list of your recent invoices.</TableCaption>
          <TableHeader>
            <TableRow className='bg-secondary'>
              <TableHead className="text-base text-white font-roboto font-semibold ">S.No</TableHead>
              <TableHead className="text-base text-white font-roboto font-semibold ">Order ID</TableHead>
              <TableHead className="text-base text-white font-roboto font-semibold ">Order Date and Time</TableHead>
              <TableHead className="text-base text-white font-roboto font-semibold ">Payment Method</TableHead>
              <TableHead className="text-base text-white font-roboto font-semibold ">Total Amount</TableHead>
              <TableHead className="text-base text-white font-roboto font-semibold text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {
              pastOrders && pastOrders?.map((orderList, index) => (
                <TableRow key={orderList.id} className='border-b border-secondary'>
                  <TableCell className="text-base text-accent font-roboto">{index + 1}</TableCell>
                  <TableCell className="text-base text-accent font-roboto">{orderList.id}</TableCell>
                  <TableCell className="text-base text-accent font-roboto">{formatDate(orderList.orderDate)}</TableCell>
                  <TableCell className="text-base text-accent font-roboto">{orderList.paymentMode}</TableCell>
                  <TableCell className="text-base text-accent font-roboto">{orderList.total}</TableCell>
                  <TableCell className="text-right px-0">
                    <Link href={`/past-order-receipt/${orderList.id}`} className="text-base font-roboto hover:bg-primary bg-secondary text-white px-4 py-2 mr-3">View</Link>
                  </TableCell>
                </TableRow>
              ))
            }

          </TableBody>
          <TableFooter>
          </TableFooter>
        </Table>
      </div>
    </div>
  )
}