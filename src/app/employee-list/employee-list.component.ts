import { Employee } from './../employee';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees!:Employee[];

  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(){
    this.employeeService.getEmployeeList().subscribe(data=>{
      this.employees = data;
      console.log(data);
    })
  }
  updateEmployee(id:number){
    this.router.navigate(['update-employee', id]) 
  }

  deleyeEmployee(id:number){
    this.employeeService.deleyeEmployeeById(id).subscribe(()=>{
      this.getEmployees();
    },error=>{console.log(error.error.message)});
  }

  employeeDetails(id:number){
    this.router.navigate(['employee-details', id]) 
  }

}
