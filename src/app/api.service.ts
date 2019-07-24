import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product-model';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiURL: string = 'http://localhost:8080';
  constructor(private httpClient: HttpClient) {}

  public createProduct(product: Product) {
    return this.httpClient.post(this.apiURL + '/insert', product);
  }

  public fetchProduct(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.apiURL + '/fetch');
  }

}

