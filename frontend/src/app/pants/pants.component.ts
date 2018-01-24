import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pants',
  templateUrl: './pants.component.html',
  styleUrls: ['./pants.component.css']
})
export class PantsComponent implements OnInit {
  product = [];
  constructor(private http: Http, private route: Router) { }

  ngOnInit() {
    this.loadproduct();
  }
  loadproduct() {
    this.http.get("http://localhost:3000/api/product/pants")
      .subscribe(
      result => {
        this.product = result.json();
      },
      error => {

      });
  }
}
