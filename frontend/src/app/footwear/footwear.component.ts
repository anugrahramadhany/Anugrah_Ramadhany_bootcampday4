import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-footwear',
  templateUrl: './footwear.component.html',
  styleUrls: ['./footwear.component.css']
})
export class FootwearComponent implements OnInit {
  product = [];
  constructor(private http: Http, private route: Router) { }

  ngOnInit() {
    this.loadproduct();
  }
  loadproduct() {
    this.http.get("http://localhost:3000/api/product/footwear")
      .subscribe(
      result => {
        this.product = result.json();
      },
      error => {

      });
  }
}

