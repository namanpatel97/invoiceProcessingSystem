import React, { useState, useEffect } from "react";
import Header from "../Components/Header";
import { Box, Typography, Button } from '@mui/material';
import AddInvoice from "../Components/Addinvoice";
import Invoices from '../Components/Invoices'
import { getAllInvoice } from "../services/api";
import { deleteInvoice } from "../services/api";

const Home = () => {
  const [addInvoice, setAddInvoice] = useState(false);
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getAllInvoice();
        setInvoices(response.data);
      } catch (error) {
        console.error("Error fetching invoices:", error);
      }
    };
    getData();
  }, [addInvoice]);

  const toggleInvoice = () => {
    setAddInvoice(prevState => !prevState); // Toggle between true and false
  };

  const removeInvoice = async (id) => {
      await deleteInvoice(id);

     const updatedInvoice = invoices.filter(invoice => invoice.id !== id);
     setInvoices(updatedInvoice);


  }

  return (
    <>
      <Header />
      <Box style={{ margin: 20 }}>
        <Typography variant="h4">Pending Invoices</Typography> 
        {!addInvoice && (
          <Button 
            variant="contained" 
            style={{ marginTop: 15 }}
            onClick={toggleInvoice}
          >
            Add Invoice
          </Button>
        )}
        {addInvoice && <AddInvoice setAddInvoice={setAddInvoice} />}
        <Box>
          <Invoices 
          invoices={invoices} 
          removeInvoice={removeInvoice} 
          />
        </Box>
      </Box>
    </>
  );
}

export default Home;