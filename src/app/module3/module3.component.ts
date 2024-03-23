import { Component } from '@angular/core';
import { faCheckCircle, faEdit, faExclamationCircle, faQuestionCircle, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Module3 } from '../_class/module3';
import { Module3Service } from '../_services/module-3.service';
import { Router } from '@angular/router';
import { LoginService } from '../_services/login.service';


@Component({
  selector: 'app-module3',
  templateUrl: './module3.component.html',
  styleUrls: ['./module3.component.css']
})
export class Module3Component {
  success=faCheckCircle
  error=faExclamationCircle
  warning= faQuestionCircle
  loginning=false;
  updateloginning=false;
  edit=faEdit;
  delete=faTrash;
addModule:Module3=new Module3();
updateModule:Module3=new Module3();
module3Infos:Module3[]=[];
noOfItems:number=5;
pageNo:number=1;
total:number;
searchByname:any;
searchPerformed=false;
deleteId:number;
showSuccessModel:string;
updateId:number
  constructor(public module_3service:Module3Service , private router:Router,private loginService:LoginService){}



ngOnInit(): void {
  this.loginService.canAccess()
  this.getAllInfo()

} 
OnAddInfo(){
  this.module_3service.addModule_3Info(this.addModule).subscribe((data)=>{
    if(data.status==201){
      this.showSuccessModel="add"
      $('#statussuccesssModal').show()
    }
  })
}

getAllInfo(){
 this.module_3service.getAllModule_3Info().subscribe((data)=>{
  this.module3Infos=data
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
  this.module_3service.deleteModule_3Info(this.deleteId).subscribe((data)=>{
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
  this.module_3service.getModule_3Info(id).subscribe((data)=>{
    if(data){
      this.updateModule=data

    }
  })
 }

 OnUpdateInfo(){
  this.module_3service.updateModule_3Info(this.updateId,this.updateModule).subscribe((data)=>{
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
    this.module3Infos=this.module3Infos.filter( res=>{
      return res.instance1.toLocaleLowerCase().match(this.searchByname.toLocaleLowerCase())
   
    })
 if(this.module3Infos.length==0){
  this.searchPerformed=true
 }
  }
 }

 sucessModel(){
  $('#statussuccesssModal').hide();
   window.location.reload()
}
}
