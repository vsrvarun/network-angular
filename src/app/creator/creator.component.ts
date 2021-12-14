import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-creator',
  templateUrl: './creator.component.html',
  styleUrls: ['./creator.component.css']
})
export class CreatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  serverType: boolean;
  machineType: string;
  machineName: string = "";
  machineContent: string = "";
  machineStatus: string;

  @Output() deviceData: EventEmitter<{
    type: string; 
    status:string; 
    name: string; 
    content: string;
  }> = new EventEmitter();

  sendData() {
    this.machineType = this.serverType ? 'Server':'BluePrint';
    this.machineStatus= (Math.random() > 0.5) ? 'Online' : 'Offline';
    this.deviceData.emit({
      type: this.machineType,
      status: this.machineStatus,
      name: this.machineName,
      content: this.machineContent
    });
  }

}
