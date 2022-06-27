import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AdminServiceService } from 'src/app/companies/companies.service';

@Component({
  selector: 'app-new-stock',
  templateUrl: './new-stock.component.html',
  styleUrls: ['./new-stock.component.css']
})
export class NewStockComponent implements OnInit {

  compCode!:string;
  stkPrice!:string;
  constructor(private service:AdminServiceService, private toastr:ToastrService) { }

  ngOnInit() {
  }

  addnew(form:NgForm)
  {
    this.service.AddStock(this.compCode, this.stkPrice).subscribe(i => {
      console.log(i);
      this.toastr.success("Comapny Submitted Successfully");
    });
  }

}
