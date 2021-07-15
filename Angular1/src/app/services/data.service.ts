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
  connect(data){
    return this.httpClient.post('http://127.0.0.1:8000/oauth/token',data);
  }
  deleteData(id){
    return this.httpClient.delete('http://127.0.0.1:8000deleteEmployee/'+id);
  }
  getEmployeeById(id){
    return this.httpClient.get('http://127.0.0.1:8000/employee/'+id);
  }
  updateEmployee(id, data){
    return this.httpClient.post('http://127.0.0.1:8000/updateEmployee/'+id,data);
  }

//user
getDataUser(){
  return this.httpClient.get('http://127.0.0.1:8000/users');
}
submit(data){
  return this.httpClient.post('http://127.0.0.1:8000/addUser',data);
}
deleteUserData(id){
  return this.httpClient.delete('http://127.0.0.1:8000/deleteUser/'+id);
}
getUserById(id){
  return this.httpClient.get('http://127.0.0.1:8000/user/'+id);
}
updateUser(id, data){
  return this.httpClient.post('http://127.0.0.1:8000/updateUser/'+id,data);
}



}
