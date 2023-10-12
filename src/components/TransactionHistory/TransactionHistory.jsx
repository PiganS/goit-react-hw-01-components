import { TableTransactions, TableTitle, TableRow, TableItem, TableTr } from "./TransactionHistory.styled"


export const TransactionHistory = ({item}) => {
    return (
<TableTransactions>
  <thead>
    <TableTr>
      <TableTitle>Type</TableTitle>
      <TableTitle>Amount</TableTitle>
      <TableTitle>Currency</TableTitle>
    </TableTr>
  </thead>

  <tbody>
   {item.map(({ id ,type ,amount ,currency })=>(
   <TableRow key={id}>
      <TableItem>{type}</TableItem>
      <TableItem>{amount}</TableItem>
      <TableItem>{currency}</TableItem>
   </TableRow>))}
  </tbody>
</TableTransactions>
)}