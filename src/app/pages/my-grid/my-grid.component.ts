import { Component, inject, Injectable } from '@angular/core';
import { Employee,EmployeeService } from '../../service/employee.service';

@Component({
  selector: 'app-my-grid',
  templateUrl: './my-grid.component.html',
  styleUrl: './my-grid.component.scss'
})

export class MyGridComponent {
  employees: Employee[]=[];
  service = inject(EmployeeService)
  selectedEmployee!: Employee 
  expanded: Boolean = true;
  constructor(){
    this.employees = this.service.getEmployee();
   
    this.selectEmployee = this.selectEmployee.bind(this);

  }
  selectEmployee(e:any) {
    e.component.byKey(e.currentSelectedRowKeys[0]).done((employee: Employee) => {
        if(employee) {
            this.selectedEmployee = employee;
        }
    });
}
}
