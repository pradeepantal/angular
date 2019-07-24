import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {Product} from '../product-model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  product: Array<Product> = new Array<Product>()

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.fetchProduct().subscribe((res)=>{
      this.product= res;
    }, err => {
      console.log('Something went wrong. Please try again');
    });
  }

}
