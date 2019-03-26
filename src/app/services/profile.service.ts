import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProfileService {

  private username:string;
  private clientid = '6ab08853ff128bbd9749'; //my client id genrated by github
  private clientsecret = '296202ed5588f3b8d6c436a4efcc3c8b8ba2f96d';//my client secret genrated by github

  apiUrl='https://api.github.com/users/';//use github web-api

  constructor(private http:Http) { 
  	console.log("service is now ready!");
  	this.username = 'Aayu8982';
  }

  getProfileInfo(){
  	return this.http.get( this.apiUrl+ this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
  	.map(res => res.json());
  }

  getProfileRepos(){
  	return this.http.get(this.apiUrl+ this.username + "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
  	.map(res => res.json());
  }

  updateProfile(username:string){
  	this.username = username;
  }

}
