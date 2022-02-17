import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  // post Mapping or adding a course
  postProduct(data:any)
  {
    return this.http.post<any>("http://localhost:8080/api/addCourse",data);
  }

  // get Mapping
  getProduct()
  {
    return this.http.get<any> ("http://localhost:8080/api/courses");
  }

  //fetching particular course with get mapping
  getParticularCourse(id:number)
  {
    return this.http.get<any>("http://localhost:8080/api/courses/"+id);
  }


  //update course
  updateCourse(data:any, id:number)
  {
    // return this.http.put<any>("http://localhost:8080/api/update/"+id,data);
    return this.http.put<any>("http://localhost:8080/api/update/"+id,data);
  }

  //deleting course
  deleteCourse(id:number)
  {
    return this.http.delete("http://localhost:8080/api/delete/"+id);
  }

}
