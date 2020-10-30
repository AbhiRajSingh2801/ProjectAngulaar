import { Component, OnInit, Input } from '@angular/core';
import { NamespaceService } from 'src/app/models/namespace.service';
// import { Namespace } from "../../models/namespace";
// import data from '../../models/data.json';

@Component({
  selector: 'app-namespace-detail',
  templateUrl: './namespace-detail.component.html',
  styleUrls: ['./namespace-detail.component.css']
})
export class NamespaceDetailComponent implements OnInit {
  selectedserv:any;
  services: any ;

  @Input() nmsps: any;
  
  constructor() { }

  ngOnInit()  
    {
      this.services = this.nmsps.services ;
      console.log(this.nmsps)
    }
    onSelectservices(serv: NamespaceService) {
      this.selectedserv = this.services;
    }

}
