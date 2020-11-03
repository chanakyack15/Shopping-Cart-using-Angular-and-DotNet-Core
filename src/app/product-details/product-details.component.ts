import { Component, OnInit } from '@angular/core';
import { ProductDetailService } from '../shared/product-detail.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private service:ProductDetailService) { }

  ngOnInit() {
    this.service.refreshList();
  }
  myitem=[];

  Addtocart(productid){
    alert(productid);

    // this.service.postCartDetails(pd.value).subscribe(
    //   res =>{
    //     console.log(pd);
    //     alert("product added");
    //   },
    //   err =>{
    //     console.log(err);

    //   }
    // )

  }
}
