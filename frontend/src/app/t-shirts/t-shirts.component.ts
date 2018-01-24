import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-t-shirts',
  templateUrl: './t-shirts.component.html',
  styleUrls: ['./t-shirts.component.css']
})
export class TShirtsComponent implements OnInit {
  product=[];
  constructor(private http: Http, private route: Router) { }

  ngOnInit() {
    this.loadproduct();  }
  loadproduct() {
    this.http.get("http://localhost:3000/api/product/t-shirts")
      .subscribe(
      result => {
        this.product = result.json();
      },
      error => {

      });
  }

}
