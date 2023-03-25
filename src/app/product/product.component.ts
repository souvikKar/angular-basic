import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  productName = '';

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((data) => {
      //console.log(data);
      this.productName = data['fruit'];

    })
  }
}
