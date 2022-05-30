import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpRequestModel, Customer } from 'types';
import { HttpServiceBase } from './http-service.base';

@Injectable({  providedIn: 'root'})
export class GetCustomersService extends HttpServiceBase {
  private get _serverUrl(): string {
    return `${this.config.ips.servicePath}customers/`;
  }

  getCustomersList$(): Observable<Customer[]> {
   return this.get$(new HttpRequestModel({
      url: this._serverUrl,
      action: 'getCustomers',
    }));
  //return this.http.get<Customers>('http://localhost:3030/customers/getCustomers');
  }

}
