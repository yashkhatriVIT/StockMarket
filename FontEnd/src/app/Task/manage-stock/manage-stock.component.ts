import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AdminServiceService } from 'src/app/companies/companies.service';
import { StockPrice } from 'src/app/Models/stock-price.model';

@Component({
  selector: 'app-manage-stock',
  templateUrl: './manage-stock.component.html',
  styleUrls: ['./manage-stock.component.css']
})
export class ManageStockComponent implements OnInit {
    all_stocks?:StockPrice[];
    compCode!:string;
    startDate!:string;
    endDate!:string;
    ishide = true;
    constructor(private service:AdminServiceService, private toastr:ToastrService) { }
  ngOnInit(): void {
  }
  toggleDisplay(){
    this.ishide = !this.ishide;
  }
  addnew(form:NgForm)
  {
    // console.log("Printing tha saved company "+ this.compCode, this.name, this.ceo, this.website, this.stkEx);
    this.service.GetStocks(this.compCode, this.startDate, this.endDate).subscribe((response: StockPrice[] | undefined) => {
      this.all_stocks = response
    });
  }

}
