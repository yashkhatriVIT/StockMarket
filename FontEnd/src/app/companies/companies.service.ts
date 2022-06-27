import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Company } from '../Models/company.model';
import { Observable } from 'rxjs';
import { StockPrice } from '../Models/stock-price.model';


@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
    temp_company?:Company;

    // is_user_authenticated : boolean = false;
    // is_admin_authenticated : boolean = false;

    companyPath:string = "http://localhost:8080/api/v1.0/market/company/";
    stockPath:string = "http://localhost:9002/api/v1.0/market/stock/";


    // /get/{id}/{startDate}/{endDate}

    constructor(private http: HttpClient) { }

    public CompanyDetails(item:Company){
        this.temp_company = item;
    }


    public GetAll():Observable<Company[]>{
        return this.http.get<Company[]>(this.companyPath + "getall");
    }

    public AddCompany(item:Company):Observable<any>{
        console.log(item);
        return this.http.post<any>(this.companyPath + "register", item);
    }

    public DeleteCompany(item:string):Observable<any>{
        return this.http.delete<any>(this.companyPath + "delete/" + item);
    }

    public GetCompany(item: string):Observable<any>{
        return this.http.get<any>(this.companyPath + "info/" + item);
    }


    public GetStocks(item:string, startDate: string, endDate: string):Observable<StockPrice[]>{
        return this.http.get<StockPrice[]>(this.stockPath + "get/" + item + "/" + startDate + "/" + endDate);
    }

    public AddStock(id: string, item:string):Observable<any>{
        return this.http.post<any>(this.stockPath + "add/" + id, item);
    }
}
