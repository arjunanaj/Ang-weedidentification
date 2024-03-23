import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faCheckCircle, faEdit, faExclamationCircle, faQuestionCircle, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Module1 } from '../_class/module1';
import { Module1Service } from '../_services/module-1.service';
import { LoginService } from '../_services/login.service';


@Component({
  selector: 'app-module1',
  templateUrl: './module1.component.html',
  styleUrls: ['./module1.component.css']
})
export class Module1Component {
  success=faCheckCircle
  error=faExclamationCircle
  warning= faQuestionCircle
  loginning=false;
  updateloginning=false;
  edit=faEdit;
  delete=faTrash;
addModule:Module1=new Module1();
updateModule:Module1=new Module1();
module1Infos:Module1[]=[];
noOfItems:number=5;
pageNo:number=1;
total:number;
searchByname:any;
searchPerformed=false;
deleteId:number;
showSuccessModel:string;
updateId:number
  constructor(public module_1service:Module1Service , private router:Router,private loginService:LoginService){}



ngOnInit(): void {
this.loginService.canAccess()
  this.getAllInfo()

} 
OnAddInfo(){
  this.module_1service.addModule_1Info(this.addModule).subscribe((data)=>{
    if(data.status==201){
      this.showSuccessModel="add"
      $('#statussuccesssModal').show()
    }
  })
}

getAllInfo(){
 this.module_1service.getAllModule_1Info().subscribe((data)=>{
  this.module1Infos=data
 },(error)=>{
  if(error){
    this.searchPerformed=true
  }
 })
}


deleteUser(id:number){
  $("#confirmModal").show();

  this.deleteId=id
 
  }



 confirmIt(){
  $("#confirmModal").hide()
  this.module_1service.deleteModule_1Info(this.deleteId).subscribe((data)=>{
    if(data.status==200){
      this.showSuccessModel="delete"
     $('#statussuccesssModal').show();
    }
   })
 }

 returnIt(){
  $("#confirmModal").hide()
 }

 goToUpdate(id:number){
  this.updateId=id;
  this.module_1service.getModule_1Info(id).subscribe((data)=>{
    if(data){
      this.updateModule=data

    }
  })
 }

 OnUpdateInfo(){
  this.module_1service.updateModule_1Info(this.updateId,this.updateModule).subscribe((data)=>{
    if(data.status==200){
      this.showSuccessModel="update"
      $('#statussuccesssModal').show();
    }
  })
 }

search(){
  
  if(this.searchByname==""){
    this.ngOnInit();
    this.searchPerformed=false
  }else{
    this.module1Infos=this.module1Infos.filter( res=>{
      return res.instance1.toLocaleLowerCase().match(this.searchByname.toLocaleLowerCase())
   
    })
 if(this.module1Infos.length==0){
  this.searchPerformed=true
 }
  }
 }

 sucessModel(){
  $('#statussuccesssModal').hide();
   window.location.reload()
}

}
