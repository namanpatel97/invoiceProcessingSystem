package com.transferprocess.server.services;

import com.transferprocess.server.model.Invoice;

import java.util.List;

public interface InvoiceService {
    public Invoice addInvoice(Invoice invoice);

    public List<Invoice> getInvoices();

    public Invoice deleteInvoice(Long id);
}
