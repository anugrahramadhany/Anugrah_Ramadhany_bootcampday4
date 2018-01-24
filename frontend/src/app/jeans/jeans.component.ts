import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jeans',
  templateUrl: './jeans.component.html',
  styleUrls: ['./jeans.component.css']
})
export class JeansComponent implements OnInit {
  product = [];
  constructor(private http: Http, private route: Router) { }

  ngOnInit() {
    this.loadproduct();
  }
  loadproduct() {
    this.http.get("http://localhost:3000/api/product/jeans")
      .subscribe(
      result => {
        this.product = result.json();
      },
      error => {

      });
  }
}
