import { Employee } from './employee';
import { environment } from './../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private url = environment.baseUrl + "v1/employees";
  constructor(private httpClien: HttpClient) { }

  getEmployeeList():Observable<Employee[]>{
    return this.httpClien.get<Employee[]>(`${this.url}`);
  }
  createEmployee(employee:Employee):Observable<Object>{
    return this.httpClien.post<Employee[]>(`${this.url}`, employee);
  }

  getEmployeeById(id:number):Observable<Employee>{
    return this.httpClien.get<Employee>(`${this.url}/${id}`)
  }

  updateEmployeeById(id:number, employee:Employee):Observable<Object>{
    return this.httpClien.put(`${this.url}/${id}`, employee);
  }

  deleyeEmployeeById(id:number):Observable<Object>{
    return this.httpClien.delete(`${this.url}/${id}`);
  }
}
