import { Employee } from './../employee';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  id!:number;
  employee : Employee = new Employee();

  constructor(private router:Router, private employeeService:EmployeeService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getEmployeeById();
  }

  getEmployeeById(){
    this.employeeService.getEmployeeById(this.id).subscribe(data=>{
      this.employee = data;
    },error=>{console.log(error.error.message)});
  }

  goToEmployeeList() {
    this.router.navigate(['/employees']);
  }
  onSubmit(){
    this.employeeService.updateEmployeeById(this.id, this.employee).subscribe(()=>{
      this.goToEmployeeList();
    },error=>{console.log(error)});
  }


}
