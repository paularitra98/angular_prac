import { Component, OnInit } from '@angular/core';
import { TestServiceService } from '../test-service.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private ts : TestServiceService) { }
users:any=[];

del(id:any){
// alert(id)
var fd=new FormData();
fd.append("id",id);
this.ts.deltp('http://localhost:2000/product/del',fd).subscribe((data:any)=>{
  this.getdata();
});

}


  getdata(){
    this.ts.getd("http://localhost:2000/product/sel").subscribe((data:any)=>{
      this.users=data;
    });
  }

  ngOnInit(): void {

    this.getdata();
  }

}
