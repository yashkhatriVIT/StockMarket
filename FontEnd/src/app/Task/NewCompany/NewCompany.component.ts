import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Company } from '../../Models/company.model';
import { AdminServiceService } from 'src/app/companies/companies.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-NewCompany',
  templateUrl: './NewCompany.component.html',
  styleUrls: ['./NewCompany.component.css']
})
export class NewCompanyComponent implements OnInit {
  new_company!:Company;
  compCode!:number;
  name!:string;
  ceo!:string;
  website!:string;
  // turnOver:string;
  stkEx!:string;
  constructor(private service:AdminServiceService, private toastr:ToastrService) { }

  ngOnInit() {
  }

  addnew(form:NgForm)
  {
    console.log("Printing tha saved company "+ this.compCode, this.name, this.ceo, this.website, this.stkEx);
    this.new_company = {
    compcode :this.compCode,
    compname : this.name,
    ceo : this.ceo,
    website : this.website,
    // turnOver : this.turnOver,
    stkex : this.stkEx,
    }
    console.log(this.new_company);
    this.service.AddCompany(this.new_company).subscribe(i => {
      console.log(i)
      this.toastr.success("Comapny Submitted Successfully")
    });
  }
}
