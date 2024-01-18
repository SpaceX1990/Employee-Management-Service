import { Injectable } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private snackBar: MatSnackBar) { }

  showSavedNotification() {
    this.snackBar.open('Operation completed successfully', 'Ok', {
      duration: 1800,
      horizontalPosition: "end",
      verticalPosition: "top"
    });
  }  showDeletedNotification() {
    this.snackBar.open('Operation completed successfully', 'Ok', {
      duration: 1800,
      horizontalPosition: "end",
      verticalPosition: "top"
    });
  }
}
