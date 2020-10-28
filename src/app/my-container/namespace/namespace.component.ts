import { Component, OnInit } from '@angular/core';
import { Namespace } from '../../models/namespace';
import {NamespaceService} from '../../models/namespace.service';

@Component({
  selector: 'app-namespace',
  templateUrl: './namespace.component.html',
  styleUrls: ['./namespace.component.css']
})
export class NamespaceComponent implements OnInit {

  public nmsps: any;
  selectednmsps: Namespace;


  constructor(private namespaceservice:NamespaceService) {

  }
  async fetchData()
{
   
  

}
  async ngOnInit() {
    let data = await this.namespaceservice.getData().then((response)=>{
    console.log(JSON.stringify(response))
    })
    }
   

  

  onselectNamespace(nmsp: Namespace) {
    this.selectednmsps = nmsp;
  }

}


