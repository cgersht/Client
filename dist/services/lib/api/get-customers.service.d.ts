import { Observable } from 'rxjs';
import { Customer } from 'types';
import { HttpServiceBase } from './http-service.base';
export declare class GetCustomersService extends HttpServiceBase {
    private readonly _serverUrl;
    getCustomersList$(): Observable<Customer[]>;
}
