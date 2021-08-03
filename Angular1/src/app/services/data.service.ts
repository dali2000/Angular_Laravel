import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

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
  return this.httpClient.post('http://127.0.0.1:8000/postRegister',data);
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
login(data){
  return this.httpClient.post('http://127.0.0.1:8000/login/',data)
}

//s3
addCdn(data){
  return this.httpClient.post('http://127.0.0.1:8000/addCdn',data);
}
addec2(data){
  return this.httpClient.post('http://127.0.0.1:8000/addEc3',data);
}
addSqs(data){
  return this.httpClient.post('http://127.0.0.1:8000/addSqs',data);
}

addServer(data){
  return this.httpClient.post('http://127.0.0.1:8000/addServer',data);
}

getServers(){
  return this.httpClient.get('http://127.0.0.1:8000/getServers');
}
getServerById(id){
  return this.httpClient.get('http://127.0.0.1:8000/getServerById/'+id);
}
deleteServerData(id){
  return this.httpClient.delete('http://127.0.0.1:8000/DeleteServer/'+id);
}
getEc3ByIdServer(id){
  return this.httpClient.get('http://127.0.0.1:8000/getEc3ByIdServer/'+id)
}
updateEc3(id, data){
  return this.httpClient.post('http://127.0.0.1:8000/updateEc3/'+id,data);
}

getS3ByIdServer(id){
  return this.httpClient.get('http://127.0.0.1:8000/getS3ByIdServer/'+id);
}
getSqsByIdServer(id){
  return this.httpClient.get('http://127.0.0.1:8000/getSqsByIdServer/'+id);
}
getS3ById(id){
  return this.httpClient.get('http://127.0.0.1:8000/getS3ById/'+id);
}
getEc3ById(id){
  return this.httpClient.get('http://127.0.0.1:8000/getEc3ById/'+id);
}
getSqsById(id){
  return this.httpClient.get('http://127.0.0.1:8000/getSqsById/'+id);
}
updateS3(id,data){
  return this.httpClient.post('http://127.0.0.1:8000/updateS3/'+id,data);
}
updateSqs(id,data){
  return this.httpClient.post('http://127.0.0.1:8000/updateSqs/'+id,data)
}



private idSaurce = new BehaviorSubject<number>(1);
currentId = this.idSaurce.asObservable();



changeId(id:number)
{
  this.idSaurce.next(id);
}

}
