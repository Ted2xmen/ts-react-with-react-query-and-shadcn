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
import useProductQuery from "@/queries/useProductQuery";

import { useIsFetching } from "react-query";

type ProductProps = {
  id: number;
  title: string;
  category?: {
    name: string;
  };
  price: number;
  creationAt: string;
};

export default function List() {
  const { data: products } = useProductQuery();
  const isFetching = useIsFetching();

  return isFetching ? (
    <div>Fetching</div>
  ) : (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Price</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {products?.data.map((product: ProductProps) => (
          <TableRow key={product.id}>
            <TableCell className="font-medium">{product.title}</TableCell>
            <TableCell>{product.category?.name}</TableCell>
            <TableCell>{product.price}</TableCell>
            <TableCell className="text-right">{product.creationAt}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
