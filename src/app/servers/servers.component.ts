import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  @Input('serverDetails') element: { type: string; status:string; name: string; content: string; };
  constructor() { }

  ngOnInit(): void {
  }

}
