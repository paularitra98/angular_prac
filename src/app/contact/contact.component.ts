import { Component, OnInit } from '@angular/core';
import { TestServiceService } from '../test-service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private ts : TestServiceService) { }

  ngOnInit(): void {
  }

  name:String='';
  email:String='';
  gender:String='';
  stream:String='';
  pimg:any=null;
  msg:any='';
  subj:any=[];

  islogin:boolean=false;

  selsub(ev:any){

    if(ev.target.checked==true){
      this.subj.push(ev.target.value);
    }
    else{
      var index=this.subj.indexOf(ev.target.value);
      this.subj.splice(index,1);
    }

    console.log(this.subj);
  }
  upfile(ev:any){
    this.pimg=ev.target.files[0];
  }

  
myfun(val:any){

  var fd=new FormData();
  fd.append('name',val.uname);
  fd.append('email',val.umail);
  fd.append('gender',val.gender);
  fd.append('stream',val.stream);
  fd.append('subject',this.subj);
  fd.append("pimg",this.pimg);

  this.ts.demo('http://localhost:2000/product/ins',fd).subscribe((data:any)=>{
  this.msg=data.msg;
  });
  



 // this.ts.demo(val);

  //alert('hi');
  //console.log(val);

  // this.name=val.uname;
  // this.email=val.email;
  // this.gender=val.gender;
  // this.stream=val.stream;

  this.islogin=true;

}

}
