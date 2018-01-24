import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shorts',
  templateUrl: './shorts.component.html',
  styleUrls: ['./shorts.component.css']
})
export class ShortsComponent implements OnInit {
product=[];
  constructor(private http: Http, private route: Router) { }

  ngOnInit() {
    this.loadproduct();
  }
  
  loadproduct() {
    this.http.get("http://localhost:3000/api/product/shorts")
      .subscribe(
      result => {
        this.product = result.json();
      },
      error => {

      });
  }
}
