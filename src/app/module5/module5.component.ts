import { Component } from '@angular/core';
import { faCheckCircle, faEdit, faExclamationCircle, faQuestionCircle, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Module5 } from '../_class/module5';
import { Module5Service } from '../_services/module-5.service';
import { Router } from '@angular/router';
import { LoginService } from '../_services/login.service';


@Component({
  selector: 'app-module5',
  templateUrl: './module5.component.html',
  styleUrls: ['./module5.component.css']
})
export class Module5Component {
  success=faCheckCircle
  error=faExclamationCircle
  warning= faQuestionCircle
  loginning=false;
  updateloginning=false;
  edit=faEdit;
  delete=faTrash;
addModule:Module5=new Module5();
updateModule:Module5=new Module5();
module5Infos:Module5[]=[];
noOfItems:number=5;
pageNo:number=1;
total:number;
searchByname:any;
searchPerformed=false;
deleteId:number;
showSuccessModel:string;
updateId:number
   constructor(public module_5service:Module5Service , private router:Router,private loginService:LoginService){}



ngOnInit(): void {
  this.loginService.canAccess()
  this.getAllInfo()

} 
OnAddInfo(){
  this.module_5service.addModule_5Info(this.addModule).subscribe((data)=>{
    if(data.status==201){
      this.showSuccessModel="add"
      $('#statussuccesssModal').show()
    }
  })
}

getAllInfo(){
 this.module_5service.getAllModule_5Info().subscribe((data)=>{
  this.module5Infos=data
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
  this.module_5service.deleteModule_5Info(this.deleteId).subscribe((data)=>{
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
  this.module_5service.getModule_5Info(id).subscribe((data)=>{
    if(data){
      this.updateModule=data

    }
  })
 }

 OnUpdateInfo(){
  this.module_5service.updateModule_5Info(this.updateId,this.updateModule).subscribe((data)=>{
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
    this.module5Infos=this.module5Infos.filter( res=>{
      return res.instance1.toLocaleLowerCase().match(this.searchByname.toLocaleLowerCase())
   
    })
 if(this.module5Infos.length==0){
  this.searchPerformed=true
 }
  }
 }

 sucessModel(){
  $('#statussuccesssModal').hide();
   window.location.reload()
}
}
