import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }


  //user CRUD
  getDataUser() {
    return this.httpClient.get('http://127.0.0.1:8000/users');
  }
  submit(data) {
    return this.httpClient.post('http://127.0.0.1:8000/register', data);
  }
  deleteUserData(id) {
    return this.httpClient.delete('http://127.0.0.1:8000/deleteUser/' + id);
  }
  getUserById(id) {
    return this.httpClient.get('http://127.0.0.1:8000/user/' + id);
  }
  updateUser(id, data) {
    return this.httpClient.post('http://127.0.0.1:8000/updateUser/' + id, data);
  }
  login(data) {
    return this.httpClient.post('http://127.0.0.1:8000/login1/', data)
  }




// Server CRUD
  addServer(data) {
    return this.httpClient.post('http://127.0.0.1:8000/addServer', data);
  }

  getServers() {
    return this.httpClient.get('http://127.0.0.1:8000/getServers');
  }
  getServerById(id) {
    return this.httpClient.get('http://127.0.0.1:8000/getServerById/' + id);
  }
  deleteServerData(id) {
    return this.httpClient.delete('http://127.0.0.1:8000/DeleteServer/' + id);
  }

  updateServer(id, data) {
    return this.httpClient.post('http://127.0.0.1:8000/updateServer/' + id, data);
  }


// Ec2 CRUD
  addec2(data) {
    return this.httpClient.post('http://127.0.0.1:8000/addEc3', data);
  }
  getEc3ById(id) {
    return this.httpClient.get('http://127.0.0.1:8000/getEc3ById/' + id);
  }
  updateEc3(id, data) {
    return this.httpClient.post('http://127.0.0.1:8000/updateEc3/' + id, data);
  }
  getEc3ByIdServer(id) {
    return this.httpClient.get('http://127.0.0.1:8000/getEc3ByIdServer/' + id)
  }

// S3 CRUD
  getS3ByIdServer(id) {
    return this.httpClient.get('http://127.0.0.1:8000/getS3ByIdServer/' + id);
  }
  addCdn(data) {
    return this.httpClient.post('http://127.0.0.1:8000/addCdn', data);
  }
  getS3ById(id) {
    return this.httpClient.get('http://127.0.0.1:8000/getS3ById/' + id);
  }
  updateS3(id, data) {
    return this.httpClient.post('http://127.0.0.1:8000/updateS3/' + id, data);
  }


// SQS CRUD
  addSqs(data) {
    return this.httpClient.post('http://127.0.0.1:8000/addSqs', data);
  }

  getSqsById(id) {
    return this.httpClient.get('http://127.0.0.1:8000/getSqsById/' + id);
  }
  getSqsByIdServer(id) {
    return this.httpClient.get('http://127.0.0.1:8000/getSqsByIdServer/' + id);
  }
  updateSqs(id, data) {
    return this.httpClient.post('http://127.0.0.1:8000/updateSqs/' + id, data)
  }

// Stats
getNbS() {
  return this.httpClient.get('http://127.0.0.1:8000/nbS');
}
getNbU() {
  return this.httpClient.get('http://127.0.0.1:8000/nbU');
}








  public user = {
    id: "",
    email: "",
    permissions: null,
    last_login: "",
    first_name: "",
    last_name:""
  }
  private idSaurce = new BehaviorSubject<number>(1);
 
  currentId = this.idSaurce.asObservable();
  



  changeId(id: number) {
    this.idSaurce.next(id);
  }


}
