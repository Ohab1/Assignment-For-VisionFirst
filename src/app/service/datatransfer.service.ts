import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class DatatransferService {
  status: any;

  constructor(private http : HttpClient) { }

 userSave(data: any) {
    return this.http.post("http://localhost:3000/User", data)
  }
  userGetData() {
    return this.http.get("http://localhost:3000/User")
  }
  
  IT_USER_NORMALGET() {
    return this.http.get("http://localhost:3000/IT_USER_NORMAL")
  }


  getsrvs() {
    return this.http.get("http://localhost:3000/posts")
  }
  postdata(data: any) {
    return this.http.post("http://localhost:3000/posts", data)
  }
  deletepost(id: number) {
    return this.http.delete("http://localhost:3000/posts/" + id)
  }
  updateservice(data: any, id: any) {
    return this.http.put("http://localhost:3000/posts/" + id, data)
  }
 




}
