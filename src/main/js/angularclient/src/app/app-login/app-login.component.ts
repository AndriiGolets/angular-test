import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.css']
})
export class AppLoginComponent implements OnInit {

  //@ViewChild('loginRef', {static: true }) loginElement: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

}
