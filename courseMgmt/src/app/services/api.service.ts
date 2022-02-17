import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  // post Mapping
  postProduct(data:any)
  {
    return this.http.post<any>("http://localhost:3000/postData/",data);
  }

  // get Mapping
  getProduct()
  {
   return this.http.get<any>("http://localhost:3000/postData");

  }

  // get user credentials

  getDetails()
  {
    return this.http.get<any>("http://localhost:3000/profile");
  }

  //update course
  updateCourse(data:any, id:number)
  {
    return this.http.put<any>("http://localhost:3000/postData/"+id,data);
  }

  //deleting course
  deleteCourse(id:number)
  {
    return this.http.delete<any>("http://localhost:3000/postData/"+id);
  }
}
