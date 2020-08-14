import { Injectable } from '@angular/core';
import {MatSnackBarModule, MatSnackBarConfig, MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})

export class NotificationService  {
  name = 'Angular 4';
  actionButtonLabel = 'Retry';
  action = true;
  setAutoHide = true;
  autoHide = 2000;

  constructor(public snackBar: MatSnackBar) {}

     open(msg) {
      const config = new MatSnackBarConfig();
      config.duration = 1000;
      this.snackBar.open(msg, 'Fechar', {
        duration: 1000,
        panelClass: ['my-snack-bar']
     });
    }

  }

