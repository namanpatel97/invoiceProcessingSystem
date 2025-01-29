
import { Table, TableHead, TableBody, TableRow, TableCell, Button, styled, Typography } from '@mui/material';

// StyledTable with corrected font sizes as numbers
const StyledTable = styled(Table)({
  width: '80%',
  margin: 20,
  marginTop: 40,
  '& > thead > tr > th': {
    background: '#000',
    color: '#FFFFFF',
    fontSize: 18, // Corrected font size to be a number
  },
  '& > tbody > tr > td': {
    fontSize: 16, // Corrected font size to be a number
  },
  '& > tbody > p':{
    fontSize: 18,
    marginTop: 15
  }
});

const Invoices = ({ invoices, removeInvoice }) => {
  return (
    <StyledTable>
      <TableHead>
        <TableRow>
          <TableCell>Vendor</TableCell>
          <TableCell>Product</TableCell>
          <TableCell>Amount</TableCell>
          <TableCell>Date</TableCell>
          <TableCell>Status</TableCell> {/* Assuming the status is what you want to display here */}
          <TableCell>Action</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {invoices && Array.isArray(invoices) && invoices.length > 0 ?
        invoices.map((invoice) => (
          <TableRow key={invoice.id}> {/* Added the `key` prop */}
            <TableCell>{invoice.vendor}</TableCell>
            <TableCell>{invoice.product}</TableCell>
            <TableCell>{invoice.amount}</TableCell>
            <TableCell>{invoice.date}</TableCell>
            <TableCell>{invoice.action}</TableCell> {/* Assuming 'status' is the correct field */}
            <TableCell>
              <Button
                variant="contained"
                color="success"
                onClick={() => removeInvoice(invoice.id)} // Remove invoice on click
              >
                Mark Done
              </Button>
            </TableCell>
          </TableRow>
        ))
        :
        <Typography>No pending invoices</Typography>
    }
      </TableBody>
    </StyledTable>
  );
};

export default Invoices;
