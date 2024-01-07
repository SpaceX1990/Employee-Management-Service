import { Injectable } from '@angular/core';
import {ConfirmPopupComponent} from "../app/popup/confirm-popup/confirm-popup.component";
import {MatDialog} from "@angular/material/dialog";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor(private dialog:MatDialog) { }

  openConfirmPopup() : Observable<boolean> {
    return this.dialog.open(ConfirmPopupComponent, {
      height: '400px',
      width: '600px',
    }).afterClosed();
  }
}
