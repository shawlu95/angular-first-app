// decorator to mark this thing as a component
import { Component } from '@angular/core';

@Component({
  selector: 'app-server', // html tag, must be unique
  templateUrl: './server.component.html',
})
export class ServerComponent {
  serverId: number = 1;
  serverStatus: string = 'online';

  getServerStatus = () => this.serverStatus;
}
