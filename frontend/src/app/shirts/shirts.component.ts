import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shirts',
  templateUrl: './shirts.component.html',
  styleUrls: ['./shirts.component.css']
})
export class ShirtsComponent implements OnInit {
  product=[];
  constructor(private http: Http, private route: Router) { }

  ngOnInit() {
    this.loadproduct();
  }

  loadproduct() {
    this.http.get("http://localhost:3000/api/product/shirts")
      .subscribe(
      result => {
        this.product = result.json();
      },
      error => {

      });
  }

}
