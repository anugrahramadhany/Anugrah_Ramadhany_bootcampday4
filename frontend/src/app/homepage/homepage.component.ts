import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Http,Headers,RequestOptions } from "@angular/http";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private http:Http, private route : Router) { }

  ngOnInit() {
  }

}
