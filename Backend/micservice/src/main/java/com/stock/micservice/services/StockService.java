package com.stock.micservice.services;



import com.stock.micservice.entities.Stock;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;

public interface StockService {
    public List<Stock> getStocks(long id, String startDate, String endDate);
    public Stock addStock(long id, BigDecimal stkPrice);

}

