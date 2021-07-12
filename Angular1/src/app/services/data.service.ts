import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { }
//emloyees
  getData(){
    return this.httpClient.get('http://127.0.0.1:8000/api/employees');
  }
  // submit(data){
  //   return this.httpClient.post('http://127.0.0.1:8000/api/addEmployee',data);
  // }
  deleteData(id){
    return this.httpClient.delete('http://127.0.0.1:8000/api/deleteEmployee/'+id);
  }
  getEmployeeById(id){
    return this.httpClient.get('http://127.0.0.1:8000/api/employee/'+id);
  }
  updateEmployee(id, data){
    return this.httpClient.post('http://127.0.0.1:8000/api/updateEmployee/'+id,data);
  }

//user
getDataUser(){
  return this.httpClient.get('http://127.0.0.1:8000/api/users');
}
submit(data){
  return this.httpClient.post('http://127.0.0.1:8000/api/addUser',data);
}
deleteUserData(id){
  return this.httpClient.delete('http://127.0.0.1:8000/api/deleteUser/'+id);
}
getUserById(id){
  return this.httpClient.get('http://127.0.0.1:8000/api/user/'+id);
}
updateUser(id, data){
  return this.httpClient.post('http://127.0.0.1:8000/api/updateUser/'+id,data);
}



}
