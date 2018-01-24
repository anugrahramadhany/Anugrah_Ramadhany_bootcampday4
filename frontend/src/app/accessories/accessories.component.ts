import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.css']
})
export class AccessoriesComponent implements OnInit {

    product=[];
  constructor(private http:Http, private route : Router) { }


  ngOnInit() {
    this.loadproduct()
  }
  loadproduct(){
    this.http.get("http://localhost:3000/api/produk/accessories")
    .subscribe(
      result => {
        this.product = result.json();
      },
      error => {

      }
    );
  }
}
