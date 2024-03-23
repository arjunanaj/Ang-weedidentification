import { Component } from '@angular/core';
import { faCheckCircle, faEdit, faExclamationCircle, faQuestionCircle, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Module4 } from '../_class/module4';
import { Module4Service } from '../_services/module-4.service';
import { Router } from '@angular/router';
import { LoginService } from '../_services/login.service';


@Component({
  selector: 'app-module4',
  templateUrl: './module4.component.html',
  styleUrls: ['./module4.component.css']
})
export class Module4Component {
  success=faCheckCircle
  error=faExclamationCircle
  warning= faQuestionCircle
  loginning=false;
  updateloginning=false;
  edit=faEdit;
  delete=faTrash;
addModule:Module4=new Module4();
updateModule:Module4=new Module4();
module4Infos:Module4[]=[];
noOfItems:number=5;
pageNo:number=1;
total:number;
searchByname:any;
searchPerformed=false;
deleteId:number;
showSuccessModel:string;
updateId:number
  constructor(public module_4service:Module4Service , private router:Router,private loginService:LoginService){}



ngOnInit(): void {
  this.loginService.canAccess()
  this.getAllInfo()

} 
OnAddInfo(){
  this.module_4service.addModule_4Info(this.addModule).subscribe((data)=>{
    if(data.status==201){
      this.showSuccessModel="add"
      $('#statussuccesssModal').show()
    }
  })
}

getAllInfo(){
 this.module_4service.getAllModule_4Info().subscribe((data)=>{
  this.module4Infos=data
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
  this.module_4service.deleteModule_4Info(this.deleteId).subscribe((data)=>{
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
  this.module_4service.getModule_4Info(id).subscribe((data)=>{
    if(data){
      this.updateModule=data

    }
  })
 }

 OnUpdateInfo(){
  this.module_4service.updateModule_4Info(this.updateId,this.updateModule).subscribe((data)=>{
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
    this.module4Infos=this.module4Infos.filter( res=>{
      return res.instance1.toLocaleLowerCase().match(this.searchByname.toLocaleLowerCase())
   
    })
 if(this.module4Infos.length==0){
  this.searchPerformed=true
 }
  }
 }

 sucessModel(){
  $('#statussuccesssModal').hide();
   window.location.reload()
}
}
