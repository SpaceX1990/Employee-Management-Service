import { Injectable } from '@angular/core';
import {MatSnackBar, SimpleSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private snackBar: MatSnackBar) { }

  showSavedNotification() {
    this.snackBar.open('Operation completed successfully', 'Ok', {
      duration: 7000,
      horizontalPosition: "end",
      verticalPosition: "top"
    });
  }
}
