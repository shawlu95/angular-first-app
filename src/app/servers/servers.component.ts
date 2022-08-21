import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus: string = 'No server created';
  serverName: string = 'two-way-bind';
  serverCreated: boolean = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {}

  onCreateServer(): void {
    this.serverCreationStatus = 'Server was created: ' + this.serverName;
    this.serverCreated = true;
  }

  onUpdateServerName(event): void {
    this.serverName = event.target.value;
  }
}
