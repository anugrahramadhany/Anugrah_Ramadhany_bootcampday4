import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import { Http } from "@angular/http";


@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {
  product = {};
  constructor(private http: Http, private route: Router) { }

  ngOnInit() {
    // this.http.getproductdetail(this.route.snapshot.params['id']);
  }
  getproductdetail(id) {
    // this.http.get('http://localhost:3000/api/productdetail/' + id).subscribe(data => {
    //   this.product = data;
    // });
  }

}
