import { Employee } from './../employee';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-detail-employee',
  templateUrl: './detail-employee.component.html',
  styleUrls: ['./detail-employee.component.css']
})
export class DetailEmployeeComponent implements OnInit {
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
    },error=>{
      console.log(error.error.message);
    })
  }
}
