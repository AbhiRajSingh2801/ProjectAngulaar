import { Component, OnInit, Input } from '@angular/core';
import { Namespace } from "../../models/namespace";
import data from '../../models/data.json';

@Component({
  selector: 'app-namespace-detail',
  templateUrl: './namespace-detail.component.html',
  styleUrls: ['./namespace-detail.component.css']
})
export class NamespaceDetailComponent implements OnInit {

  datajs:any= data ;

  @Input() nmsps: Namespace;
  
  constructor() { }

  ngOnInit()  
    {
      console.log(this.nmsps) ;
    }

}
