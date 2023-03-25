import { DataService } from './../data.service';
import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnChanges, OnDestroy {
  name = '';
  items = [];
  cart = [];

  constructor(private dService: DataService) {
    console.log(this.constructor.name);
    this.cart = this.dService.cart;
  }

  ngOnInit(): void {
    console.log(this.constructor.name, 'ngOnInit');
  }
  ngOnChanges(): void {
    console.log(this.constructor.name, 'ngOnChanges');
  }
  ngOnDestroy(): void {
    console.log(this.constructor.name, 'ngOnDestroy');
  }

  enterName(n: any) {
    // this.name = n.value;
    // console.log(n.value);
    this.dService.name = n.value;

  }

  updateCart(e: any) {
    //alert(JSON.stringify(e));
    //alert('cart updated successfully');

    this.items = e;
  }

}
