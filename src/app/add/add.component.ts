import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api.service';
import {Product} from '../product-model';
import { Router} from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  user = {};
  p:Product= new Product();
  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
  }

  onClickSubmit(data) {

    this.p.name = data.name;
    this.p.cost = data.cost;
    console.log(this.p);
    this.apiService.createProduct(this.p).subscribe((res)=>{
      console.log(" added a product ");
      this.router.navigate(['/success'])
    }, err => {
      console.log('Something went wrong. Please try again');
    });

  }

}
