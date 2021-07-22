import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) { }


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

//s3
addS3(data){
  return this.httpClient.post('http://127.0.0.1:8000/addS3',data);
}
addec2(data){
  return this.httpClient.post('http://127.0.0.1:8000/addEc3',data);
}


}
