import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: ` <p>Danger</p> `,
  styles: [
    `
      p {
        padding: 20px;
        background-color: mistyrose;
        border: 1px solid red;
        color: red;
      }
    `,
  ],
})
export class WarningAlertComponent {}
