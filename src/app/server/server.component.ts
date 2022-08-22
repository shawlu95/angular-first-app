// decorator to mark this thing as a component
import { Component } from '@angular/core';

@Component({
  selector: 'app-server', // html tag, must be unique
  templateUrl: './server.component.html',
  styles: [
    `
      .online {
        color: white;
      }
      .offline {
        color: yellow;
      }
    `,
  ],
})
export class ServerComponent {
  serverId: number = 1;
  serverStatus: string = 'online';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus = () => this.serverStatus;

  getColor = () => (this.serverStatus === 'online' ? 'green' : 'red');
}
