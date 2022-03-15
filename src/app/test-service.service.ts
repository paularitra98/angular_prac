import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

  constructor(private ht:HttpClient) { }

  demo(url:any,fd:any){
    // alert(val);
    // console.log(val);
    return this.ht.post(url,fd);
  }

  deltp(url:any,fd:any){
    
    return this.ht.post(url,fd);
  }

  getd(url:any){
    return this.ht.get(url);
  }

  editp(url:any,fd:any){
    
    return this.ht.post(url,fd);
  }
  updateins(url:any,fd:any){
    return this.ht.post(url,fd);
  }

}
