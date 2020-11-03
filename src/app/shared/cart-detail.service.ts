import { Injectable } from '@angular/core';
import { CartDetail } from './cart-detail.model';
import { HttpClient } from  "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class CartDetailService {
  formData:CartDetail;
  readonly rootUrl ="http://localhost:54579/api";

  constructor(private http:HttpClient) { }
  postCartDetails(formData:CartDetail){
  return  this.http.post(this.rootUrl + "/CartDetails",formData);

  }
}
