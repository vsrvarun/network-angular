import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  servers: any[] = [];

  setData(deviceData: {type: string; status:string; name: string; content: string}) {
    this.servers.push({
      type: deviceData.type,
      status: deviceData.status,
      name: deviceData.name,
      content: deviceData.content
    });
  }
}