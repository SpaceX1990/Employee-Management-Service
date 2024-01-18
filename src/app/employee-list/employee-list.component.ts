import { Component, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { HttpClient } from '@angular/common/http';
import { EmployeeDetails } from '../../model/EmployeeDetails';
import { RouterService } from '../../services/router.service';
import { PopupService } from '../../services/popup.service';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  searchText: string = ' ';
  displayedColumns: string[] = ['id', 'firstname', 'lastname', 'street', 'postcode', 'city', 'phone', 'action'];
  dataSource: EmployeeDetails[] = [];
  totalItems: number;
  pageSize: number = 10;

  constructor(
    private http: HttpClient,
    private routerService: RouterService,
    private popupService: PopupService,
    private employeeService: EmployeeService
  ) {
    this.fetchData();
  }

  fetchData() {
    this.http.get<EmployeeDetails[]>('http://localhost:8089/employees').subscribe((data) => {
      this.dataSource = data;
      this.totalItems = this.dataSource.length; // Set the totalItems property
      this.paginator.length = this.totalItems;
      this.paginator.pageSize = this.pageSize;

      // Ensure current page is within valid range after data is fetched
      const currentPage = Math.floor(this.paginator.pageIndex * this.paginator.pageSize / this.totalItems);
      this.paginator.pageIndex = currentPage;

      // Update the displayed data based on the current page
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      const endIndex = startIndex + this.paginator.pageSize;
      this.dataSource = this.dataSource.slice(startIndex, endIndex);
    });
  }




  navToCreate() {
    this.routerService.navToEmployeeCreate();
  }

  navToDetails(position: number) {
    this.routerService.navToEmployeeDetails(position);
  }

  navToEdit(position: number) {
    this.routerService.navToEmployeeEdit(position);
  }

  deleteEmployee(id: number) {
    this.popupService.openConfirmPopup().subscribe((isYes) => {
      if (isYes) {
        this.employeeService.deleteById(id).subscribe(() => {
          this.fetchData();
        });
      }
    });
  }

  onPageChanged(event: PageEvent) {
    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;

    // Update the displayed data by slicing the dataSource
    this.dataSource = this.dataSource.slice(startIndex, endIndex);

    // Update the totalItems property
    this.totalItems = this.dataSource.length;
  }

}
