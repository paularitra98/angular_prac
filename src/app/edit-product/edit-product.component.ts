import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { TestServiceService } from '../test-service.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  id:any="";
user:any={};



name:String='';
email:String='';
gender:String='';
stream:String='';
pimg:any=null;
msg:any='';
subj:any=[];

isjava:any=false;
ispython:any=false;
isphp:any=false;


  constructor(private activaro:ActivatedRoute,private ts:TestServiceService,private router:Router) { }

  ngOnInit(): void {
    var id=this.activaro.snapshot.paramMap.get('id');
    // alert(id);
this.id=id;
    var fd=new FormData();
    fd.append("id",this.id);

    this.ts.editp('http://localhost:2000/product/editpro',fd).subscribe((data:any)=>{
  this.user=data;

  this.subj=data.subject.split(",");

     if(data.subject.indexOf("python")!="-1"){
      this.ispython=true;
    }
    if(data.subject.indexOf("java")!="-1"){
      this.isjava=true;
    }
    if(data.subject.indexOf("php")!="-1"){
      this.isphp=true;
    }
});


  }

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
  fd.append("id",this.id);

  this.ts.updateins('http://localhost:2000/product/updt',fd).subscribe((data:any)=>{
  this.msg=data.msg;
  this.router.navigate(["/about"]);
  });
  


}


  

}
