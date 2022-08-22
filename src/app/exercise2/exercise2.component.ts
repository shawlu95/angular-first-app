import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise2',
  templateUrl: './exercise2.component.html',
  styleUrls: ['./exercise2.component.css'],
})
export class Exercise2Component implements OnInit {
  showSecret: boolean = false;
  log = [];

  constructor() {}

  ngOnInit(): void {}

  onToggleDetail(): void {
    this.showSecret = !this.showSecret;
    this.log.push(this.log.length + 1);
  }
}
