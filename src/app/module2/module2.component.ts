import { Component } from '@angular/core';
import { faCheckCircle, faEdit, faExclamationCircle, faQuestionCircle, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Module2 } from '../_class/module2';
import { Module2Service } from '../_services/module-2.service';
import { Router } from '@angular/router';
import { LoginService } from '../_services/login.service';


@Component({
  selector: 'app-module2',
  templateUrl: './module2.component.html',
  styleUrls: ['./module2.component.css']
})
export class Module2Component {
  success=faCheckCircle
  error=faExclamationCircle
  warning= faQuestionCircle
  loginning=false;
  updateloginning=false;
  edit=faEdit;
  delete=faTrash;
addModule:Module2=new Module2();
updateModule:Module2=new Module2();
module2Infos:Module2[]=[];
noOfItems:number=5;
pageNo:number=1;
total:number;
searchByname:any;
searchPerformed=false;
deleteId:number;
showSuccessModel:string;
updateId:number
  constructor(public module_2service:Module2Service , private router:Router,private loginService:LoginService){}



ngOnInit(): void {
  this.loginService.canAccess()
  this.getAllInfo()

}
OnAddInfo(){
  this.module_2service.addModule_2Info(this.addModule).subscribe((data)=>{
    if(data.status==201){
      this.showSuccessModel="add"
      $('#statussuccesssModal').show()
    }
  })
}

getAllInfo(){
 this.module_2service.getAllModule_2Info().subscribe((data)=>{
  this.module2Infos=data
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
  this.module_2service.deleteModule_2Info(this.deleteId).subscribe((data)=>{
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
  this.module_2service.getModule_2Info(id).subscribe((data)=>{
    if(data){
      this.updateModule=data

    }
  })
 }

 OnUpdateInfo(){
  this.module_2service.updateModule_2Info(this.updateId,this.updateModule).subscribe((data)=>{
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
    this.module2Infos=this.module2Infos.filter( res=>{
      return res.instance1.toLocaleLowerCase().match(this.searchByname.toLocaleLowerCase())
   
    })
 if(this.module2Infos.length==0){
  this.searchPerformed=true
 }
  }
 }

 sucessModel(){
  $('#statussuccesssModal').hide();
   window.location.reload()
}
}
